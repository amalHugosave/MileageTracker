import React from "react"
import RNPickerSelect from 'react-native-picker-select';
import { useEffect , useState } from "react";
import { View ,StyleSheet ,Text ,Image} from "react-native";
import { useQuery , useRealm } from "@realm/react";
import { Vehicles } from "../Database/models/VehiclesSchema";
import useVehicleStore from "../state/Vehicles";
import AddRefuelingData from "./AddRefuelingData";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import { Refueling } from "../Database/models/RefuelingSchema";
import useRefuelTriggerStore from "../state/RefuelTrigger";
import useVehicleArrayStore from "../state/VehiclesArray";
import Picker from "./Picker/Picker";

const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  
const PerformanceWithVehicle = ({navigation ,userVehicles}) => {
    const {setRefuelState ,refuelDatas} = useRefuelTriggerStore();
    const { BSON, ObjectId } = require('bson');
    const realm = useRealm();
    const {vehId ,setVehicle , name} = useVehicleStore();
    const [priceChartData , setPriceChartData] = useState(null)
    const [mileageChartData , setMileageChartData] = useState(null);
    const {VehiclesArray} = useVehicleArrayStore();
    // const [vehRefuelingData , setVehRefuelingData] = useState([]);
    const {image} = useVehicleStore();
    
    const getChartData = ()=>{
        const fiveMonthsAgo = new Date(new Date().getFullYear(), new Date().getMonth() - 4, 1);
        const curRefuelingData = refuelDatas.filter((data)=> data.date >= fiveMonthsAgo)
        getPriceChartData(curRefuelingData);
        getMileageChartData(curRefuelingData)
    }


    const getPriceChartData = (curRefuelingData)=>{
      let monthsArr =[0 , 0, 0 ,0 , 0 , 0, 0, 0 ,0 , 0 , 0 , 0]
      for(let i = 0;i<curRefuelingData.length ; i++){
          const month = curRefuelingData[i].date.getMonth();
          monthsArr[month] += curRefuelingData[i].price;
      }
      let arr = [];
      const curMonth = new Date().getMonth();
      for(let i = 4;i>=0;i--){
          const month = (curMonth - i + 12)%12 ;
          const obj = {month : months[month], price : monthsArr[month]}
          arr.push(obj);
      }
      setPriceChartData(arr);
    }

    const getMileageChartData = (curRefuelingData)=>{
      let dist =[0 , 0, 0 ,0 , 0 , 0, 0, 0 ,0 , 0 , 0 , 0]
      let fuelCon = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0];
      for(let i = 0;i<curRefuelingData.length ; i++){
          const month = curRefuelingData[i].date.getMonth();
          dist[month] += (curRefuelingData[i].odometerEnd - curRefuelingData[i].odometerStart);
          fuelCon[month] += curRefuelingData[i].fuelConsumed;
      }
      let arr = [];
      const curMonth = new Date().getMonth();
      for(let i = 4;i>=0;i--){
          const month = (curMonth - i + 12)%12 ;
          const obj = {month :  months[month], mileage : fuelCon[month] === 0 ? null : parseFloat( (dist[month]/fuelCon[month]).toFixed(2))};
          arr.push(obj);
      }
      setMileageChartData(arr);

    }
    // console.log(mileageChartData , "mileage")

    useEffect(()=>{
        getChartData();
    }, [refuelDatas])
    // console.log(refuelDatas);

    const handleSelectChange = (value)=>{
        const objectId = new ObjectId(value);
        const obj = realm.objects(Vehicles).filtered('_id == $0' , objectId)[0];
        setVehicle({name : obj.name , type : obj.type , engine : obj.engine , userId : obj.userId , vehId : obj._id , image : obj.image});
        const curRefuelingData = realm.objects(Refueling).filtered('vehId == $0' , value).sorted('date' , true);
        setRefuelState({curVehId : value , refuelDatas : [...curRefuelingData]});
    }

    const handlePressForAddFuel = ()=>{
        navigation.navigate('Refueling' , {screen : 'refuelingForm'}  )
    }


  return (
    <View style={styles.container}>
        <Text style={styles.subHeading}>Choose the vehicle</Text>
       {VehiclesArray.length > 0 &&
       <Picker name={name} list={VehiclesArray} handleSelectChange={handleSelectChange} conStyles={170}/>
        // <RNPickerSelect
        //     style={{...pickerSelectStyles}}
        //     placeholder={{}}
        //     onValueChange={(value) => {handleSelectChange(value)}}
        //     items={curUserVehicles}
        //     />
        }

        <Image style={styles.image} source={image.length > 300 ? { uri: `data:image/png;base64,${image}` } : {uri :image}}/>
        {
            refuelDatas.length > 0 ?(
            <View >
                {priceChartData && <BarChart priceChartData={priceChartData} />}
                <Text style={styles.chartHeading}>Vehicle mileage performance</Text>
                <View style={styles.chart}>
                {mileageChartData && <LineChart mileageChartData={mileageChartData}/>}
                {/* <VictoryChart padding={{ top: 30, right: 50, bottom: 50, left: 50 }} 
                domainPadding={20} width= {370} theme={VictoryTheme.material} >
                <VictoryAxis
                    style={{ 
                    ticks : {stroke: "transparent"} ,
                    grid : {stroke : 'transparent'}}}
                    
                />
        
                 <VictoryAxis dependentAxis  
                 tickLength={0}
                 style={{ axis: { stroke: "transparent" } ,
                 ticks : {stroke: "transparent"},
                 grid: { stroke: '#CED8DE' , strokeDasharray : [0,0] }}}
                 tickValues={mileageYTickValues.map((item)=>item[0].y)}
                 tickFormat={mileageYTickValues.map((item) => `${item[0].y}`)}
                 />
                    <VictoryScatter
                        size={5}
                        style={{ data: { fill: "#EB655F" },
                         }}
                        data={mileageChartData}
                        x="month"
                        y="mileage"
                    />
                    <VictoryLine
                        style={{
                        data: { stroke: "#EB655F" },
                        parent: { padding : 100}
                        }}
                        x = "month"
                        y = "mileage"
                        data={mileageChartData}
                        interpolation="cardinal"
                    />
                </VictoryChart> */}
                </View>
            </View>
        ):  <AddRefuelingData handlePress={handlePressForAddFuel}/> 
        }
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        alignItems : 'center'
    },
    image :{
        width: 345 ,
        height: 185,
        marginTop : 20,
        borderColor : 'white',
        borderWidth : 6,
        borderRadius : 10
    },subHeading :{
        textAlign : 'center',
        fontSize : 16,
        color : '#0B3C58'
        // backgroundColor :'red'
    },chartHeading : {
        fontSize : 16,
        color : '#0B3C58',
        paddingLeft:15,
        fontWeight:'bold',
        marginTop : 30
    },chart : {
        backgroundColor : 'white',
        margin : 10,
        width :350,
        alignItems : 'center',
        borderRadius : 8
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        marginLeft : 109, 
        marginVertical : 10,
        textAlign : 'center',
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      color: 'black',
      backgroundColor : 'white',
      width : 170,
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        marginLeft : 109, 
       marginVertical : 10,
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 8,
      color: 'black',
      backgroundColor : 'white',
      width : 170,
      textAlign : 'center',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });

export default PerformanceWithVehicle
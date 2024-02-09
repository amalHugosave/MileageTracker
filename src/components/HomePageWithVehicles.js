import React, { useEffect } from 'react'
import { View ,Text , Image, StyleSheet} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import AddRefuelingData from './AddRefuelingData';
import { useState } from 'react';
import { useQuery, useRealm } from '@realm/react';
import { Vehicles } from '../Database/models/VehiclesSchema';
// import  useVehicleStore from '../state/Vehicles'
import useVehicleStore from '../state/Vehicles';
import { Refueling } from '../Database/models/RefuelingSchema';
import HomePageWithRefuelingData from './HomePageWithRefuelingData';
import useRefuelTriggerStore from '../state/RefuelTrigger';
import useVehicleArrayStore from '../state/VehiclesArray';
import useLoading from './Hooks/Loading';
import Picker from './Picker/Picker';
// import 
// useVehicleStore
const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
const HomePageWithVehicles = ({vehiclesData ,navigation }) => {
    const {setVehicle  ,image ,vehId , name } = useVehicleStore();
    const [mileage , setMileage] = useState(null);
    const [avMileage , setAvMileage] = useState(null);
    const [ priceChartData , setPriceChartData] = useState([]);
    const [latestRefuelingData , setLatestRefuelingData] = useState([]);
    const realm = useRealm();
    const {VehiclesArray} = useVehicleArrayStore();
    const {curVehId , setRefuelState , refuelDatas} = useRefuelTriggerStore();

      useEffect(()=>{
        getRefuelingDataOfVeh();
      } , [])

      useEffect(()=>{
        getChartData();
      } , [vehId , refuelDatas])

      const getChartData = ()=>{
            const fiveMonthsAgo = new Date(new Date().getFullYear(), new Date().getMonth() - 4, 1);
            const curRefuelingData = refuelDatas.filter((data)=> data.date >= fiveMonthsAgo)
            getMileage();
            getPriceChartData([...curRefuelingData]);
            const arr = refuelDatas.sort((a,b)=>b.date - a.date).slice(0 , 5);   
            setLatestRefuelingData(...[arr]);
      }
      const getRefuelingDataOfVeh = ()=>{
            const curRefuelingData = realm.objects(Refueling).filtered('vehId == $0' , vehId).sorted('date' , true);
            setRefuelState({curVehId : vehId , refuelDatas : [...curRefuelingData]});
        if(vehId){
            const fiveMonthsAgo = new Date(new Date().getFullYear(), new Date().getMonth() - 4, 1);
            const curRefuelingData = realm.objects(Refueling).filtered('vehId == $0 AND date >= $1' ,vehId , fiveMonthsAgo).sorted('date' ,true);
            getMileage();
            getPriceChartData([...curRefuelingData]);
            const arr = refuelDatas.sort((a,b)=>b.date - a.date).slice(0 , 5);   
            setLatestRefuelingData(...[arr]);
        }
        // setVehRefuelingData(curRefuelingData);
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
  
      const getMileage = ()=>{
        const totalRef = realm.objects(Refueling).filtered('vehId == $0' , vehId).sorted('date');
        // console.log("length " ,totalRef.length);
        if(totalRef.length > 0){
          let res = 0;
          // console.log(totalRef);
          totalRef.map((data)=>{
              // console.log("data = " ,data)
              res += parseFloat((data.odometerEnd - data.odometerStart)/data.fuelConsumed);
          })
          // console.log(res);
          setAvMileage(parseFloat((res/totalRef.length).toFixed(2)));
          const obj = totalRef[totalRef.length - 1];
          setMileage(parseFloat(((obj.odometerEnd  - obj.odometerStart)/obj.fuelConsumed).toFixed(2)));
        }
  
      }

    
    const handleSelectChange = (value)=>{

        let obj = {}
        vehiclesData.map((vehicleData) => {
            
            if(vehicleData._id.equals(value) ){
                obj= vehicleData;
            }
        });
        setVehicle({name : obj.name , engine : obj.engine , vehId : obj._id , userId : obj.userId , type : obj.type , image : obj.image});
        const curRefuelingData = realm.objects(Refueling).filtered('vehId == $0' , value).sorted('date' , true);
        setRefuelState({curVehId : value , refuelDatas : [...curRefuelingData]});
        // console.log(obj)
    }

    const handlePressForAddFuel = ()=>{
        navigation.navigate('Refueling' , {screen : 'refuelingForm'}  )
    }

    
    // console.log("x" , latestRefuelingData.length ,mileage ,avMileage  ,priceChartData.length);
    // console.log(load3, load1 , load2 , priceChartData.length ,mileage ,avMileage,latestRefuelingData.length);
   
  return (
    <View style={styles.container}>
        <Text style={styles.welcome}>Here is everything about your</Text>
        {
          VehiclesArray.length > 0 &&
          <Picker name={name} list={VehiclesArray} handleSelectChange={handleSelectChange} conStyles={170}/>
        }
        <View style={styles.imageContainer}>
        <Image style={styles.image} source={image.length > 300 ? { uri: `data:image/png;base64,${image}` } : {uri :image}}/>
        </View>
        {priceChartData.length > 0 && mileage && avMileage && latestRefuelingData.length > 0 ?
            <HomePageWithRefuelingData navigation={navigation} priceChartData={priceChartData} mileage={mileage} avMileage={avMileage} latestRefuelingData={latestRefuelingData}/>:
            <AddRefuelingData handlePress={handlePressForAddFuel} />
        }
    </View>
  )
}
const styles = StyleSheet.create({
  container : {
    marginBottom:30
  },
    imageContainer :{
        alignItems : 'center',
        
    },
    welcome : {
        fontSize : 18,
        textAlign : 'center'
    },image :{
        width: 354 ,
        height: 198,
        marginTop : 20,
        borderColor : "white",
        borderWidth : 8,
        borderRadius : 8,
    },loadingContainer :{
      marginTop : 100,
      // backgroundColor : 'red',
      // height : '200%'
      // height : 100,
      // width  :100
    },conStyles :{
      width : 170
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        marginLeft : 109,
        marginTop : 20,
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 8,
      color: 'black',
      backgroundColor : 'white',
      width : 170,
      paddingRight: 30,
      textAlign : 'center'
    },
    inputAndroid: {
        marginLeft : 109,
        marginTop : 20,
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 8,
      color: 'black',
      backgroundColor : 'white',
      width : 160,
      paddingRight: 30,
      textAlign : 'center',
      borderRadius : 5

    }
  });

export default HomePageWithVehicles
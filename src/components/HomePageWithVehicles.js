import React, { useEffect } from 'react'
import { View ,Text , Image, StyleSheet} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import AddRefuelingData from './AddRefuelingData';
import { useState } from 'react';
import { useQuery } from '@realm/react';
import { Vehicles } from '../Database/models/VehiclesSchema';
// import  useVehicleStore from '../state/Vehicles'
import useVehicleStore from '../state/Vehicles';
// import 
// useVehicleStore
const HomePageWithVehicles = ({vehiclesData ,navigation}) => {
    const AllVehicles = useQuery(Vehicles)
    const [vehicleSelectData , setvehicleSelectData] = useState([]);
    const {setVehicle  ,image ,id ,name ,  getState} = useVehicleStore();
    // const { , }  = useVehicleStore();
    // console.log(id);
    const getSelectData = ()=>{
        let selectData = [];
        // let i = 0;
        vehiclesData.map((vehicleData) =>{
            
            selectData.push({label : vehicleData.name , value : vehicleData._id});
            if(vehicleData._id.equals(id)){
                const t = selectData[0];
                selectData[0] = selectData[selectData.length - 1];
                selectData[selectData.length - 1] = t;
                // swapElements(selectData, 0, selectData.length - 1);
            }
            // i++;
        })
        if(id == ''){
            setVehicle({name : vehiclesData[0].name , engine : vehiclesData[0].engine , id : vehiclesData[0]._id , userId : vehiclesData[0].userId , type : vehiclesData[0].type , image : vehiclesData[0].image});
        }
        setvehicleSelectData(selectData);
    }

    useEffect(()=>{
        getSelectData();
    } , [AllVehicles])

    

    const handleSelectChange = (value)=>{
        // if(value > 0){
        //     let obj = vehiclesData[value];

        // }else {

        // }
        // console.log(value)
            // console.log("id" ,id , "name",name);
            // console.log("value" , value)
        let obj = {}
        vehiclesData.map((vehicleData) => {
            
            if(vehicleData._id.equals(value) ){
                obj= vehicleData;
                // console.log("yes");
            }
        });
        setVehicle({name : obj.name , engine : obj.engine , id : obj._id , userId : obj.userId , type : obj.type , image : obj.image});

        console.log(obj)
    }

    const handlePressForAddFuel = ()=>{
        navigation.navigate('')
    }
    // console.log("x" ,vehiclesData[1].image);
  return (
    <View style={styles.container}>
        <Text style={styles.welcome}>Here is everything about your</Text>
        <RNPickerSelect
             placeholder={{}}
            // value={id}
            style={{...pickerSelectStyles}}
            onValueChange={(value) => handleSelectChange(value)}
            items={vehicleSelectData}
        />
        <Image style={styles.image} source={{ uri: `data:image/png;base64,${image}` }}/>
        
        <AddRefuelingData />
    </View>
  )
}
const styles = StyleSheet.create({
    container :{
        alignItems : 'center'
    },
    welcome : {
        fontSize : 18,
        textAlign : 'center'
    },image :{
        width: 324 ,
        height: 148,
        marginTop : 20
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        marginLeft : 45,
        marginTop : 20,
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      color: 'black',
      backgroundColor : 'white',
      width : 300,
      paddingRight: 30,
      textAlign : 'center'
    },
    inputAndroid: {
        marginLeft : 45,
        marginTop : 20,
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 8,
      color: 'black',
      backgroundColor : 'white',
      width : 300,
      paddingRight: 30,
      textAlign : 'center',
      borderRadius : 5

    },
  });

export default HomePageWithVehicles
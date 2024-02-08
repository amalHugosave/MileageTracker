import { useQuery, useRealm } from '@realm/react';
import React from 'react'
import { View  ,Text, StyleSheet , ScrollView} from 'react-native'
import { Vehicles } from '../Database/models/VehiclesSchema';
import useUserStore from '../state/Users';
import { useState ,useEffect } from 'react';
import AddVehicle from '../components/AddVehicle';
import PerformanceWithVehicle from '../components/PerformanceWithVehicle';
import { Refueling } from "../Database/models/RefuelingSchema";
import useVehicleStore from "../state/Vehicles";
import useRefuelTriggerStore from '../state/RefuelTrigger';
import useVehicleArrayStore from '../state/VehiclesArray';


const PerformancePage = ({navigation}) => {
  const realm = useRealm();
  const {curVehId,setRefuelState} = useRefuelTriggerStore();
    // const {VehiclesArray} = useVehicleArrayStore();
    const allRefueling = useQuery(Refueling);
    const {VehiclesArray} = useVehicleArrayStore();
    const { refuelDatas} = useRefuelTriggerStore();

    // useEffect(()=>{
    //   getChartData();
    // } , [vehId ,allRefueling])


    const navigateToVehicleForm = ()=>{
      navigation.navigate('Vehicles' , {screen: 'addVehiclesForm'})
    }
    

    // console.log(VehiclesArray)
    // console.log(userVehicles , priceChartData , mileageChartData,vehId);
  return (
   
      
    <View style={styles.container}>
      <Text style={styles.heading}>Performance</Text>
        <ScrollView style={styles.scrollContainer}>
        {
            VehiclesArray.length > 0  ? 
             <PerformanceWithVehicle navigation={navigation} userVehicles={VehiclesArray}/>
            :
            (
                <View style ={styles.addVehicleContainer}>
                  <AddVehicle handlePress={navigateToVehicleForm}/>
                </View>
            )
            
        }
        </ScrollView>
    </View>
    )
  }

const styles = StyleSheet.create({
  container : {
      flex : 1,
      backgroundColor : '#F0F2F2',
  },
  headingContainer : {

  },
  heading : {
      textAlign : 'center',
      paddingVertical : 10,
      fontSize : 30,
      color : '#0B3C58',
      borderBottomWidth :0.5,
      borderColor : 'gray'
      
  },
  addVehicle :{
      flex :1,
      justifyContent : 'center',
      paddingHorizontal : 20
  },noFuelContainer : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
      paddingHorizontal : 40
  },
  noFuelHeading : {
      fontSize : 20,
      color : '#0B3C58',
      marginTop : 20,
      marginBottom : 10
  },noFuelSub : {
      textAlign : 'center',
      fontSize :15
  },button : {
      alignItems : 'flex-end',
      position : 'absolute',
      bottom : 0,
      right : 0
  },addVehicleContainer :{
    justifyContent : 'center',
    // backgroundColor : 'red',
    marginTop : '50%',
    paddingHorizontal : 60
  },scrollContainer :{
    flex :1,
    // backgroundColor :'yellow'
  }
})




export default PerformancePage
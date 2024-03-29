import { useQuery, useRealm } from '@realm/react';
import React, { useEffect } from 'react'
import { View  ,Text, StyleSheet , Image ,Pressable ,Dimensions} from 'react-native'
import { Vehicles } from '../Database/models/VehiclesSchema';
import useUserStore from '../state/Users';
import { useState } from 'react';
import AddVehicle from '../components/AddVehicle';
import RNPickerSelect from 'react-native-picker-select';
import useVehicleStore from '../state/Vehicles';
import { Refueling } from '../Database/models/RefuelingSchema';
import RefuelingBox from '../components/RefuelingBox';
import useRefuelTriggerStore from '../state/RefuelTrigger';
import useVehicleArrayStore from '../state/VehiclesArray';
import Picker from '../components/Picker/Picker';
const RefuelingInfo = ({navigation}) => {
    const { VehiclesArray} = useVehicleArrayStore();
    const { BSON, ObjectId } = require('bson');
    const realm = useRealm();
    const {id} = useUserStore();
    const {vehId , name ,setVehicle} = useVehicleStore();
    const {refuelDatas , setRefuelState ,curVehId} = useRefuelTriggerStore();
    
    // console.log(name , "name");  
    useEffect (()=>{
        getRefuelingDataOfVeh();
    }, [])

    const getRefuelingDataOfVeh = ()=>{
            const curRefuelingData = realm.objects(Refueling).filtered('vehId == $0' , vehId).sorted('date' , true);
            setRefuelState({curVehId : vehId , refuelDatas : [...curRefuelingData]});
    }

    const handleSelectChange = (value)=>{
        const objectId = new ObjectId(value);
        const obj = realm.objects(Vehicles).filtered('_id == $0' , objectId)[0];
        setVehicle({name : obj.name , type : obj.type , engine : obj.engine , userId : obj.userId , vehId : obj._id , image : obj.image});
        const curRefuelingData = realm.objects(Refueling).filtered('vehId == $0' , value).sorted('date' , true);
        setRefuelState({curVehId : value , refuelDatas : [...curRefuelingData]});
    }

    const navigateToVehicleForm = ()=>{
        navigation.navigate('Vehicles' , {screen : 'addVehiclesForm'})
    }

    const navigateToRefuelingForm = ()=>{
        navigation.navigate('refuelingForm' );
    }
    // console.log(vehRefuelingData)
  return (
    <View style={styles.container}>
        <View style={styles.headingContainer}>
            <Text style={styles.heading}>Refueling</Text>
            {
                VehiclesArray.length > 0 &&(
                     <Picker name={name} list={VehiclesArray} handleSelectChange={handleSelectChange} conStyles={300}/>
                    
                )
            }
        </View>
        {
            VehiclesArray.length == 0 ?
            (
                <View style={styles.addVehicle}>
                    <AddVehicle handlePress={navigateToVehicleForm}/>
                </View>
            ):refuelDatas.length == 0 ?(
        
                <View style={styles.noFuelContainer}>
                    <Image source={require('../rcs/clouds.png')}/>
                    <Text style={styles.noFuelHeading}>No refuelling records yet!</Text>
                    <Text style={styles.noFuelSub}>Add a record using the + button below to begin your wealthcare journey</Text>
                    <Pressable onPress={navigateToRefuelingForm} style ={styles.button}>
                        <Image style={styles.image} source={require('../rcs/AddUser.png')} />
                    </Pressable>
                </View> 
            ): (<View style = {styles.refuelingDatas}>
                    <RefuelingBox navigation={navigation} data={refuelDatas}/>
                    <Pressable onPress={navigateToRefuelingForm} style ={styles.button}>
                        <Image style={styles.image} source={require('../rcs/AddUser.png')} />
                    </Pressable>
                </View>
            )
                
        }
        
        
    </View>

  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#F0F2F2',
        alignItems : 'center'
    },
    headingContainer : {
        borderBottomColor :' gray',
        borderBottomWidth :0.5,
        alignItems : 'center',
        width : Dimensions.get('window').width,
        paddingBottom : 10,
        zIndex : 1
    },
    heading : {
        textAlign : 'center',
        paddingVertical : 10,
        fontSize : 30,
        color : '#0B3C58',
        
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
    },image : {
    },refuelingDatas : {
        height : '80%'
    }
})


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        marginLeft : 45,
        marginVertical : 10,

      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      color: 'black',
      backgroundColor : 'white',
      width : 300,
      textAlign : 'center',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        marginLeft : 45, 
       marginVertical : 10,
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 8,
      color: 'black',
      backgroundColor : 'white',
      width : 300,
      textAlign : 'center',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });

export default RefuelingInfo
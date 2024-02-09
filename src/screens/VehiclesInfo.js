import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet ,Pressable , Image , ScrollView } from 'react-native'
import VehicleCard from '../components/VehicleCard'
import AddVehicle from '../components/AddVehicle'
import useVehicleArrayStore from '../state/VehiclesArray'


const VehiclesInfo = ({navigation}) => {
  const {VehiclesArray} = useVehicleArrayStore();
  const handlePress = ()=>{
    navigation.navigate('addVehiclesForm')
  }
  const navigateToForm = ()=>{
    navigation.navigate('addVehiclesForm')
  }
  return (
    
    <View style={styles.container}>
        <Text style={styles.heading}>Vehicles</Text>
        
        {
          VehiclesArray.length === 0 ?
          (
            <View style={styles.addvehicleContainer}>
              <AddVehicle handlePress={navigateToForm}/> 
            </View >
              ):(
            <ScrollView style={styles.cardContainer}>
              <View style={styles.cardContainerStyles}>
            {
                VehiclesArray.map((vehicle)=><VehicleCard key={vehicle._id} data={vehicle}/>)
            }
            </View>
            </ScrollView>
           )
          }
          <Pressable onPress={handlePress} style ={styles.button}>
            <Image source={require('../rcs/AddUser.png')} />
          </Pressable>
        
        
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    // position :'absolute',
    flex : 1,
    backgroundColor : '#F0F2F2',
    // backgroundColor:'yellow'
  },heading : {
    fontSize : 30,
    // fontWeight : 'bold',
    color : '#0B3C58',
    textAlign : 'center',
    paddingVertical : 20,
    borderBottomColor : 'black',
    borderBottomWidth : 0.5,
    // backgroundColor : 'green'
  },cardContainer : {
      // alignItems : 'center',
      marginTop : 20,
      marginBottom : 50,
      // flex : 0.9
  },button : {
      position : 'absolute',
      bottom : 0,
      right : 0,
      // flex : 0.1,
      // width : 60,
      // backgroundColor : 'red'
  },addvehicleContainer :{
     flex : 1,
     justifyContent : 'center',
     padding : 30
  },cardContainerStyles :{
    alignItems :'center'
  }
})

export default VehiclesInfo
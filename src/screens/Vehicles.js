import React from 'react'
import { View, Text, StyleSheet ,Pressable , Image } from 'react-native'
import VehicleCard from '../components/VehicleCard'



const Vehicles = ({navigation}) => {
  const vehcles = [{name : 'Yamaha' , type : 2 , engine : 155 ,id : 1}];

  const handlePress = ()=>{
    navigation.navigate('addVehiclesForm')
  }

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Vehicles</Text>
        <View style={styles.cardContainer}>
        {
            vehcles.map((vehicle)=><VehicleCard key={vehicle.id} data={vehicle}/>)
        }
        </View>
        
        <Pressable onPress={handlePress} style ={styles.button}>
          <Image source={require('../rcs/AddUser.png')} />
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#F0F2F2',
    // backgroundColor:'yellow'
  },heading : {
    fontSize : 25,
    color : '#0B3C58',
    textAlign : 'center',
    paddingVertical : 20,
    borderBottomColor : 'black',
    borderBottomWidth : 0.5
  },cardContainer : {
    alignItems : 'center',
    marginTop : 20
  },button : {
      position : 'absolute',
      bottom : 0,
      right : 0
  }
})

export default Vehicles
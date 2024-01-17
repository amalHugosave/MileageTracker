import React from 'react'
import { StyleSheet, View ,Text , Button , Image } from 'react-native'
const AddVehicle = ({container}) => {
  return (
    <View style={container}>
            <Image source={require('../rcs/dummyVehicle.png')} />
            <Text style={styles.vehAdd}>Add vehicles to start tracking its fueling and performance</Text>
            <Button title= "Add Vehicle"/>
    </View>
  )
}

const styles = StyleSheet.create({
    vehAdd : {
        textAlign : 'center',
        fontSize : 15,
        marginTop : 5,
        marginBottom : 5
    }
})

export default AddVehicle
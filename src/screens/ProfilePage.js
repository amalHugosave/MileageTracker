import React from 'react'
import { View ,Image, StyleSheet, StatusBar,Text ,Button } from 'react-native'

const ProfilePage = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../rcs/dummyProfile.png')}/>
            <Image style={styles.image2} source={require('../rcs/logo2.png')}/>
        </View>
        <View style={styles.medium}>
            <Text style={styles.greeting}>Hi Snack Muncher</Text>
            <Text style={styles.welcome}>Track your miles towards a prosperous financial journey!</Text>
            
        </View>
        <View style={styles.bottom}>
            <Image source={require('../rcs/dummyVehicle.png')} />
            <Text style={styles.vehAdd}>Add vehicles to start tracking its fueling and performance</Text>
            <Button title= "Add Vehicle"/>
        </View>

    </View>
  )
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: '#D0EAEA',  
    },
    header : {
        flexDirection : "row",
        marginTop : 30,
        marginLeft : 20
    },image2 : {
        marginLeft : 110
    },greeting : {
        color : "crimson",
        fontSize : 30,

    },medium :{
        alignItems : 'center',
        marginTop : 50,
        padding : 20
    },welcome : {
        fontSize : 17,
        textAlign : 'center'
    },bottom : {
        alignItems : 'center',
        marginTop : 20
    },vehAdd : {
        textAlign : 'center',
        fontSize : 15,
        marginTop : 5,
        marginBottom : 5
    }
})

export default ProfilePage
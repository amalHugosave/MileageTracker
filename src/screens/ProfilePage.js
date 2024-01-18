import { useQuery, useRealm } from '@realm/react'
import React, { useEffect, useState } from 'react'
import { View ,Image, StyleSheet, StatusBar,Text ,Button } from 'react-native'
import { Users } from '../Database/models/UsersSchema';
import AddVehicle from '../components/AddVehicle';
import useUserStore from '../state/Users';

const ProfilePage = ({navigation}) => {

    const {name , nickname } = useUserStore();

    const    addVehicles = ()=>{
        // console.log(navigation)
        navigation.navigate('vehicles');
    }
    

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../rcs/dummyProfile.png')}/>
            <Image style={styles.image2} source={require('../rcs/logo2.png')}/>
        </View>
        <View style={styles.medium}>
            <Text style={styles.greeting}>Hi {nickname || name}</Text>
            <Text style={styles.welcome}>Track your miles towards a prosperous financial journey!</Text>
            
        </View>
        
        <AddVehicle handlePress={addVehicles} container={styles.bottom} />

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
    }
})

export default ProfilePage
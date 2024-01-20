import { useQuery, useRealm } from '@realm/react'
import React, { useEffect, useState } from 'react'
import { View ,Image, StyleSheet, StatusBar,Text ,Button } from 'react-native'  
import useUserStore from '../state/Users';
import { Vehicles } from '../Database/models/VehiclesSchema';
import HomePageNoVehicles from '../components/HomePageNoVehicles';
import HomePageWithVehicles from '../components/HomePageWithVehicles';

const ProfilePage = ({navigation}) => {
    const {name , nickname , id} = useUserStore();
    const [userVehicles , setUserVehicles] = useState([]);
    const AllVehicles = useQuery(Vehicles);
    const realm = useRealm();

    const getUserVehicles = ()=>{
        const curUserVehicles = realm.objects(Vehicles).filtered('userId == $0' , id);
        setUserVehicles(curUserVehicles);
    }
    useEffect(() =>{
        getUserVehicles();
    } ,[AllVehicles])


    const    addVehicles = ()=>{
        navigation.navigate('vehicles',{screen : 'addVehiclesForm'});
    }
    
    // console.log(userVehicles.length);
    // console.log(AllVehicles[0].userId)
    // console.log(id)
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../rcs/dummyProfile.png')}/>
            <Image style={styles.image2} source={require('../rcs/logo2.png')}/>
        </View>
        <View style={styles.medium}>
            <Text style={styles.greeting}>Hi {nickname || name}</Text>
            
        </View>
        {
        userVehicles.length !== 0  ? (
            <HomePageWithVehicles vehiclesData={userVehicles} navigation={navigation}/>
            //     <View style={styles.bottom}>
            //     <Text style={styles.welcome}>Track your miles towards a prosperous financial journey!</Text>    
            //     <AddVehicle handlePress={addVehicles}  />
            // </View>
            ) :(
                <HomePageNoVehicles handlePress={addVehicles}/>

            )
}
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
        marginTop : 30,
        padding : 20
    },
})

export default ProfilePage
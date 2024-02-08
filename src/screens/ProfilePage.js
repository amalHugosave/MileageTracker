import { useQuery, useRealm } from '@realm/react'
import React, { useEffect, useState } from 'react'
import { View ,Image, StyleSheet,Text ,Button , ScrollView, Pressable } from 'react-native'  
import useUserStore from '../state/Users';
import { Vehicles } from '../Database/models/VehiclesSchema';
import HomePageNoVehicles from '../components/HomePageNoVehicles';
import HomePageWithVehicles from '../components/HomePageWithVehicles';
import LinearGradient from 'react-native-linear-gradient';
import { Users } from '../Database/models/UsersSchema';
import useVehicleArrayStore from '../state/VehiclesArray';
import { Swipeable } from 'react-native-gesture-handler';
import { SwipeableListView } from 'react-native';
import useVehicleStore from '../state/Vehicles';
const ProfilePage = ({navigation}) => {
    const {name , nickname , id , setUser} = useUserStore();
    const {VehiclesArray} = useVehicleArrayStore();
    const {setVehicle} = useVehicleStore();
    const {setVehicleState} = useVehicleArrayStore();
    const realm = useRealm();
    console.log(id, name ,"veh");
    useEffect(()=>{
        if(!id){
            const activeUser = realm.objects(Users).filtered('active == $0' , true)[0];
            setUser({name : activeUser.name , nickname : activeUser.nickname , email : activeUser.email , id : activeUser._id , passcode : activeUser.passcode});
            const vehicles = realm.objects(Vehicles).filtered('userId == $0' , activeUser._id);
            if(vehicles.length > 0)
                setVehicle({name : vehicles[0].name , engine : vehicles[0].engine , vehId : vehicles[0]._id , userId : vehicles[0].userId , type : vehicles[0].type , image : vehicles[0].image});
            setVehicleState({VehiclesArray : [...vehicles]});
       }
    },[])



    const    addVehicles = ()=>{
        navigation.navigate('Vehicles',{screen : 'addVehiclesForm'});
    }
    // const navigateToPopUp = ()=>{
    //     navigation.navigate('popUp');
    // }
    

  return (
    
    <LinearGradient style={{flex : 1}}   colors={['#C5E3DC', '#F6F6EC']} >
        <Swipeable >
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() =>navigation.openDrawer()}>
                    <Image source={require('../rcs/dummyProfile.png')}/>
                </Pressable>
                <Image style={styles.image2} source={require('../rcs/logo2.png')}/>
            </View>
            <View style={styles.medium}>
                <Text style={styles.greeting}>Hi {nickname || name}</Text>
                
            </View>
            {
            VehiclesArray.length !== 0  ? (
                <HomePageWithVehicles vehiclesData={VehiclesArray} navigation={navigation}/>
                ) :(
                    <HomePageNoVehicles handlePress={addVehicles}/>


                )
    }
        </ScrollView>
        </Swipeable>
    </LinearGradient>
    
  )
}
const styles = StyleSheet.create({
    container : {
    
        // backgroundColor: '#D0EAEA',  
 
    },
    header : {
        flexDirection : "row",
        marginTop : 30,
        marginLeft : 20
    },image2 : {
        marginLeft : 130
    },greeting : {
        color : "crimson",
        fontSize : 30,

    },medium :{
        alignItems : 'center',
        padding : 20,
        // width : Dimensions.get('window').width
    }
})

export default ProfilePage
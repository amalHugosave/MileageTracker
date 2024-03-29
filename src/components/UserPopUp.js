import React from 'react'
import { StyleSheet, View ,TouchableOpacity,Text, Image  } from 'react-native'
import useUserStore from '../state/Users'
import DrawerButton from './Buttons/DrawerButton'
import LogoutButton from './Buttons/LogoutButton'
import ModalContainer from './ModalContainer'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useRealm } from '@realm/react'
import { Users } from '../Database/models/UsersSchema'
import { useNavigationState } from '@react-navigation/native'
import { Vehicles } from '../Database/models/VehiclesSchema'
import { Refueling } from '../Database/models/RefuelingSchema'
import useVehicleArrayStore from '../state/VehiclesArray'
import useVehicleStore from '../state/Vehicles'
import useRefuelTriggerStore from '../state/RefuelTrigger'
const UserPopUp = ({navigation}) => {
  const realm = useRealm();
  const {resetRefuelState} = useRefuelTriggerStore();
  const {deleteVehiclesState} = useVehicleArrayStore();
  const {id , nickname , name} = useUserStore();
  const userImage = require('../rcs/dummyProfile.png');
  const deleteImage = require('../rcs/deleteUser.png');
  const [isModalOpen , setIsModalopen] = useState(false);
  const [isDeleteUserModalOpen , setIsDeleteUserModalOpen] = useState(false);
  const pressHandle = ()=>{
    navigation.closeDrawer();
    setIsModalopen(true);
  }

  const logoutAccept = ()=>{
    setIsModalopen(false);
    realm.write(()=>{
      const toUpdate = realm.objects(Users).filtered('active == $0' , true);
      // console.log(toUpdate);
      if(toUpdate.length > 0)
        toUpdate[0].active = false;
      // console.log(toUpdate);
    })

    deleteVehiclesState();
    resetRefuelState();
    navigation.closeDrawer();
    navigation.navigate('login');
  }

  const logoutReject = () =>{
    setIsModalopen(false);

  }

  const OpenDeleteModal = ()=>{
    navigation.closeDrawer();
    setIsDeleteUserModalOpen(true);
  }
  const deleteAccept = ()=>{
    setIsDeleteUserModalOpen(false);
    const toDelete = realm
      .objects(Users)
      .filtered('_id == $0', id);

      const toDeleteVehicles = realm
      .objects(Vehicles)
      .filtered('userId == $0', id);


      const toDeleteRefueling = realm
      .objects(Refueling)
      .filtered('userId == $0', id);

      realm.write(()=>{
        realm.delete(toDelete);
        realm.delete(toDeleteVehicles);
        realm.delete(toDeleteRefueling);
      })
      navigation.closeDrawer();
      navigation.navigate('login');
  }

  const deleteReject = ()=>{
    setIsDeleteUserModalOpen(false);
  }
  return (
    <View style={styles.container}>
      <ModalContainer modalVisible={isModalOpen} modaltext="Are you sure you want to logout?" handleAccept={logoutAccept} handleReject={logoutReject}/>
      <ModalContainer modalVisible={isDeleteUserModalOpen} modaltext="Are you sure you want to delete your account?" modalSub="Note that all your data will be lost permanently." handleAccept={deleteAccept} handleReject={deleteReject}/>

      <View style={styles.top}>
        <Image source={userImage}/>
        <Text style={styles.heading}>{nickname || name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <DrawerButton handlePress={logoutAccept} image={userImage} text="Switch Profile"/>
        <View style={styles.underline}></View>
        <DrawerButton handlePress={OpenDeleteModal} image={deleteImage} text="Delete Account"/>
      </View>
      <View style={styles.logout}>
        <LogoutButton pressHandle = {pressHandle}/>
      </View>
      <Text style={styles.ShowVersion}>Current Version: 1.0</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    backgroundColor : '#F0F2F2',
    flex : 1,
    alignItems : 'center',
    // zIndex : 1,
    // position : 'absolute'
  },top :{
    marginVertical:40,
    paddingLeft : 30,
    width : "100%"
  },heading :{
    fontSize : 20,
    color : '#0B3C58',
    marginTop : 15
  },buttonContainer :{
    backgroundColor : 'white',
    width : '85%',
    borderRadius : 10,
    // marginBottom : "90%",
    // flex : 0.8,
    elevation : 10
  },underline :{
    borderColor : '#CED8DE',
    borderWidth :0.5,
    marginHorizontal : 10
  },logout :{
    width : '85%',
    flex : 0.8,
    justifyContent : 'flex-end'
  },ShowVersion : {
    backgroundColor : '#58798C',
    width : '100%',
    position :'absolute',
    bottom : 0,
    padding : 15,
    color : 'white',
    textAlign : 'center'
  }
})



export default UserPopUp
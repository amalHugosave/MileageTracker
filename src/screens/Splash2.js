import React, { useEffect } from 'react'
import { View ,Text , StyleSheet , Image} from 'react-native'
import { useRealm } from '@realm/react';
import {  useState } from 'react'
import { Users } from '../Database/models/UsersSchema';
const logo = require('../rcs/logo.png')
const Splash2 = ({navigation}) => {
    const realm = useRealm();
    const [activeUser , setActiveUser] = useState([]);
  useEffect(()=>{
    // getActiveUser();
    setTimeout(()=>{
        // console.log(activeUser , "activeUser");
        const activeUserCheck = realm.objects(Users).filtered('active == $0' , true);
        // console.log(activeUserCheck[0].passcode);
        if(activeUserCheck.length == 0)
            navigation.navigate('login');
        else if(activeUserCheck[0].passcode.length == 0)
            navigation.navigate('tabNavigation');
        else{
            navigation.navigate('checkPasscodeContainer' ,{user :activeUserCheck[0]})
        }
    } , 2000)
  } , [])

//   const getActiveUser = ()=>{
    
//     console.log(activeUserCheck);
//     if(activeUserCheck.length > 0)
//       setActiveUser(activeUserCheck[0]);
//     else
//       setActiveUser({});
//   }


  return (
    <View style={styles.container}>
        <Image source={logo} />    
    </View>
  )
}



  
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:'#F55858',
        justifyContent: 'center',
        alignItems : 'center'
    }
})

export default Splash2
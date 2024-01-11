import React from 'react'
import { View ,Image , StyleSheet, Text , Button  } from 'react-native'
import PasscodeEntry from '../components/PasscodeEntry'


const SetPasscode = () => {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Image  style={styles.image} source = {require('../rcs/lArrow.png')}/>
            <View style={styles.body}>
                <Text style={styles.heading}>
                    Set a Passcode
                </Text>
                <PasscodeEntry heading='Enter a 4-Digit Passcode' subtitle='You will need to enter at every app launch'/>

                <PasscodeEntry heading='Confirm Password' subtitle=''/>

            </View>
        </View>
        <View style={styles.bottom}>
            <Button style={styles.b1} title="continue" color="#0B3C58"/>
            <Button title="Skip" color="orange" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: '#D0EAEA',
        padding : 10
    },top : {
        flex : 1
    },image :{
        margin : 10
    },body : {
        marginTop : 50
    },heading : {
        fontSize : 25,
        fontWeight : 'bold',
        color : 'black',
        marginBottom : 30
    },b1 : {
        marginBottom : 10
    }
})

export default SetPasscode
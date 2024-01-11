import React from 'react'
import { View  , StyleSheet, TextInput, Text  } from 'react-native'

const passcode = ['X' , 'X' ,'X' ,'X'];
const PasscodeEntry = ({heading , subtitle}) => {
  return (
    <View style={styles.container} >
            <Text style={styles.passHeading}>{heading}<Text style = {styles.star}>*</Text></Text>
            {subtitle && <Text>{subtitle}</Text>}
            <View style = {styles.inputContainer}>
            {
                    passcode.map((val , index) =>(
                        <TextInput id={index} style={styles.input} value='X'/>
                    ))
            }
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        marginBottom : 15
    },
 passHeading : {
        fontSize : 20,
        color : 'black',
        marginBottom : 5
    },star :{
        color : 'crimson'
    },input : {
        backgroundColor : 'white',
        flex : 1,
        padding : 10,
        alignItems : 'center',
        margin : 10,
        textAlign : 'center',
        borderRadius : 5
    },inputContainer : {
        flexDirection : 'row',
        justifyContent : 'space-around'
    }
})

export default PasscodeEntry
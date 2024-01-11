import React, { useState } from 'react'
import { View  ,StyleSheet , Text , Button , Image} from 'react-native'
import InputWithText from '../components/InputWithText'
// import CheckBox from '@react-native-community/checkbox';
const CreateAccounts = () => {
    // const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../rcs/lArrow.png')} />
        <View style = {styles.top}>
            <Text style={styles.heading}>Create Account</Text>
            <View style={styles.inputscontainer}>
                <InputWithText text='Name' />
                <InputWithText text='Nickname' />
                <InputWithText text='Email Address' />
            </View>
        </View>
        <View style={styles.bottom}>
            <View style={styles.cBoxContainer}>
                {/* <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                onCheckColor = "orange"
                /> */}
                <Text>Tick this box to confirm that you are at least 18years old and agree to our <Text style={styles.TandC}> Terms & conditions</Text></Text>
            </View>

            <Button style={styles.button} title="Continue" />


        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: '#D0EAEA',       
    },inputscontainer : {
        flex : 0.8,
        justifyContent : 'space-around',
    },image :{
        margin : 20
    },
    top :{
        flex : 0.8,
        marginTop : 70,
        marginLeft : 20
        // alignItems : 'center'
    },
    heading :{
        fontSize : 30,
        color : 'black',
        
    },
    input :{
        height: 40,
        margin: 4,
        borderWidth: 1,
        padding: 10,
        backgroundColor : 'white',
        borderRadius : 10,
        borderColor : 'white',
        width : 300
    },InputText :{
        color : 'black',
        fontSize : 15,
    },bottom : {
        backgroundColor : 'white',
        flex : 0.2,
        alignItems : 'center'
    },
    cBoxContainer : {
        marginBottom : 10,
        marginTop : 10,
        padding : 5
        // backgroundColor : "black"
    },TandC : {
        color : "#B84646"
    },button : {
        paddingLeft: 20 ,
        paddingHorizontal : 20
    }


})

export default CreateAccounts
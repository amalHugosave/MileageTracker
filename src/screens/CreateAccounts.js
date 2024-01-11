import React, { useState } from 'react'
import { View  ,StyleSheet , Text , Button , Image , Pressable} from 'react-native'
import InputWithText from '../components/InputWithText'
import BackButton from '../components/BackButton'
import CheckBox from '../components/CheckBox'
// import CheckBox from 'react-native-check-box'
// import CheckBox from '@react-native-community/checkbox';
const CreateAccounts = ({navigation}) => {
    // const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [checked , setChecked] = useState(false);
    const [data , setData]  = useState(['' , '' , '']);

    const [error , setError] = useState(false)

    const handleInputs =  (index , changedData)=>{
        data[index] = changedData;
        setData(data);
        console.log(data);
    }

    const nameCheck = (name) =>{
        const regex = /[0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
        return !regex.test(name);
    }

    function isValidGmail(email) {
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return gmailRegex.test(email);
      }

      const handleError = (err)=>{
            setError((error)=>error && err);
            console.log(error);
      }

  return (
    <View style={styles.container}>
        <BackButton style={styles.image} dest ='signUp' navigation={navigation}/>

        {/* <Pressable onPress={()=>navigation.navigate('signUp')}>
            <Image onPress={()=> navigation.navigate('signUp')} style={styles.image} source={require('../rcs/lArrow.png')} />
        </Pressable> */}
        <View style = {styles.top}>
            <Text style={styles.heading}>Create Account</Text>
            <View style={styles.inputscontainer}>
                <InputWithText handleError={handleError} text='Name' required={true} handleInputs={handleInputs} id={0} errorText='you cannot include Symbols or Numbers' validationFun={nameCheck}/>
                <InputWithText handleError={handleError} text='Nickname' required={false} handleInputs={handleInputs} id={1} errorText='you cannot include Symbols or Numbers' validationFun={nameCheck}/>
                <InputWithText handleError={handleError} text='Email Address' required={true} handleInputs={handleInputs} id={2} errorText='Invalid email' validationFun={isValidGmail}/>
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
                <CheckBox setChecked={setChecked}/>
                <Text>Tick this box to confirm that you are at least 18 years old and agree to our <Text style={checked && styles.TandC}> Terms & conditions</Text></Text>
            </View>
                
            <Button  style={styles.button} title="Continue" disabled={ !checked}/>


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
        marginTop :20,
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
        padding : 5,
        flexDirection : 'row',
        alignItems : 'center',
        padding : 5,
        
        // backgroundColor : "black"
    },TandC : {
        color : "#B84646"
    },button : {
        paddingLeft: 20 ,
        paddingHorizontal : 20
    }


})

export default CreateAccounts
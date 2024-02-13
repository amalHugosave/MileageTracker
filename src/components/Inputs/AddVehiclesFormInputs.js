import React, { useState } from 'react'
import { StyleSheet, View,TextInput,Text} from 'react-native'

const AddVehiclesFormInputs = ({placeholder ,handleData , id ,val ,Style}) => {
    const [focus , setFocus] = useState(false);
    // const [value , setValue] = useState(val);
    console.log(val , "val");
    const handleFocus = ()=>{
        setFocus(true);
        // if(value === placeholder)
        // if(val === '')
        //     setValue('');
    }

    const handleChangeText = (text)=>{
        console.log(text , "text")
        if(text !== placeholder)
            handleData(id , text);
    }


    const handleSelectionChange = ()=>{
        
        if(val.length == 0){
            setFocus(false);
            // setValue(placeholder);
        }
    }

  return (
    <View style = {styles.container}>
        {(focus || val.length > 0)&&
            <Text style={styles.textStyle}>{placeholder}</Text>
        }
        <TextInput onBlur={handleSelectionChange} keyboardType='numeric' onFocus={handleFocus} onChangeText={(text)=>handleChangeText(text)} style={focus ?styles.inputFocused: styles.inputNotFocused} value={val || focus ? val : placeholder}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        width : 300,
        borderRadius : 4,
        paddingHorizontal : 10,
        justifyContent : 'center',
        marginTop : 10,
        

    },inputNotFocused : {
        fontSize : 16,
        color : 'gray',
        padding : 10
    },inputFocused :{
        fontSize : 16,
        padding : 0,
        color :  'black'
    },textStyle :{
        color : 'gray'
    }
})

export default AddVehiclesFormInputs
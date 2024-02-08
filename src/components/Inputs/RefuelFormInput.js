import React, { useState } from 'react'
import { StyleSheet, View,TextInput,Text} from 'react-native'

const RefuelFormInput = ({placeholder ,handleData , id ,val}) => {
    const [focus , setFocus] = useState(false);
    const [value , setValue] = useState(val);
    console.log(typeof(val) , "val");
    const handleFocus = ()=>{
        setFocus(true);
        if(value === placeholder)
            setValue('');
    }

    const handleChangeText = (text)=>{
        setValue(text);
        handleData(id , text);

    }


    const handleSelectionChange = ()=>{
        
        if(value.length == 0){
            setFocus(false);
            setValue(placeholder);
        }
    }

  return (
    <View style = {styles.container}>
        {(focus || value !== placeholder)&&
            <Text>{placeholder}</Text>
        }
        <TextInput onBlur={handleSelectionChange} keyboardType='numeric' onFocus={handleFocus} onChangeText={(text)=>handleChangeText(text)} style={focus ?styles.inputFocused: styles.inputNotFocused} value={value}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        width : 144,
        borderRadius : 4,
        paddingHorizontal : 10,
        justifyContent : 'center'
    },inputNotFocused : {
        fontSize : 16,
        color : 'gray'
    },inputFocused :{
        fontSize : 16,
        padding : 0,
        color :  'black'
    }
})

export default RefuelFormInput
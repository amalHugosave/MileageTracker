import React from 'react'
import { View  ,StyleSheet, TextInput , Text} from 'react-native'
const InputWithText = ({text}) => {
  return (
    <View style ={styles.container}>
        <Text style={styles.InputText}>{text}</Text>
        <TextInput style={styles.input}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        marginLeft : 30
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
    }

})

export default InputWithText
import React from 'react'
import { View , Image, Text, StyleSheet } from 'react-native'
import image2 from "./../rcs/2wheeler.png"
import image1 from "./../rcs/2wheeler.png"
import image3 from "./../rcs/4wheeler.png"

const images = [image1 , image2 , image3]

// const data ={name : 'Yamaha R15' , type : 2 , engine : 150}
const VehicleCard = ({data}) => {
  // console.log("vehicle Card" , data.i3mage);
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={data.image.length > 300 ? { uri: `data:image/png;base64,${data.image}` } : {uri :data.image}}/>
        <View style={styles.textContainer}>
            <View style={styles.leftText}>
                <Text style={styles.leftTopText}>{data.name}</Text>
                <Text style ={styles.leftBottomText}>{data.type} wheeler</Text>
            </View>
            <View style={styles.rightText}>
                <Text>{data.engine} CC</Text>
            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container :{
      elavation :20,
      backgroundColor : "white",
      borderRadius : 10,
      marginBottom : 25,
      alignItems : 'center',
      width : "90%"
      // flex : 1
    },textContainer : {
      // backgroundColor :'red',
      width : 320,
      flexDirection : 'row',
      justifyContent : 'space-between',
      alignItems : 'center'
    },leftText : {
        
        paddingHorizontal : 16,
        paddingVertical : 5
    },leftTopText : {
      // textAlign:'left',
        color : '#0B3C58',
        fontSize : 16,
        marginBottom : 5,
        textAlign : 'center'

    },leftBottomText :{
      color : '#58798C',
      textAlign : 'center'
    },rightText :{
      paddingHorizontal : 16,
        paddingVertical : 5,
        color : '#0B3C58'
    },
    image : {
      width: "100%" ,
       height: 148,
       borderRadius : 10
    
    }
})

export default VehicleCard
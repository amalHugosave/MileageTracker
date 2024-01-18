import React from 'react'
import { View , Image, Text, StyleSheet } from 'react-native'
import image2 from "./../rcs/2wheeler.png"
import image1 from "./../rcs/2wheeler.png"
import image3 from "./../rcs/4wheeler.png"

const images = [image1 , image2 , image3]

// const data ={name : 'Yamaha R15' , type : 2 , engine : 150}
const VehicleCard = ({data}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={images[0]}/>
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
      shadowColor: '#171717',
      shadowOffset: {width: 3, height: 5},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      backgroundColor : "white",
      borderRadius : 8
      // flex : 1
    },textContainer : {
      flexDirection : 'row',
      justifyContent : 'space-between',
      alignItems : 'center'
    },leftText : {
        paddingHorizontal : 16,
        paddingVertical : 5
    },leftTopText : {
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
    }
    // image : {
    //   display : 'block'
    // }
})

export default VehicleCard
import React from 'react'
import { View , Image ,Text, StyleSheet, Pressable } from 'react-native'

const UserCardMod = ({data ,handlePress }) => {
  return (
    <Pressable style={styles.container} onPress={()=>handlePress(data)}>
        <View style={[styles.image , {backgroundColor : data.color}]}>
            <Text style={styles.imageText}>{data.name[0].toUpperCase()}</Text>
        </View>
        <Text numberOfLines={1} ellipsizeMode="tail"  style={styles.text}>{data.nickname || data.name}</Text>
    </Pressable>
  )
}


const styles = StyleSheet.create({
    container : {
      // backgroundColor : 'yellow',
      alignItems : 'center',
      width : 75,
      marginBottom : 10
    },image :{
        width : 54,
        height : 54,
        borderRadius : 27,
        justifyContent : 'center',
        alignItems : 'center'
    },text : {
      Text: 'ellipsis'
    },imageText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 28,
        
        // fontWeight: 'bold'
    }
})
export default UserCardMod
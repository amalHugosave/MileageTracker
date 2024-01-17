import React from 'react'
import { View  ,Image, StyleSheet, Pressable} from 'react-native'

const HeaderWithBackbutton = () => {
  return (
    <View>
        <Pressable onPress={()=>console.log("y")} style={styles.backButtonContainer}></Pressable>
        <Image source={require('../rcs/headerwithbackbutton.png')} />
    </View>
  )
}
const styles = StyleSheet.create({
    backButtonContainer : {
        width : 40,
        height : 40,
        position : 'absolute',
        left : 15,
        top : 25,
        zIndex : 1,

    }
})

export default HeaderWithBackbutton
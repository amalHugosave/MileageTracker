import React from 'react'
import { StyleSheet, View , Text , Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const SignUp = () => {
  return (
    <LinearGradient
        colors={['#D0EAEA' , '#F6F6EC']}
    >
        <Image source={require('../rcs/logo.png')} />
        <Text>SignUp</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container : {
        flex:1

    }
})

export default SignUp
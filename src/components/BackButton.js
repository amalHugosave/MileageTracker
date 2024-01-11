import React from 'react'
import { Pressable ,Image} from 'react-native'

const BackButton = ({navigation , dest , style}) => {
  return (
    <Pressable onPress={()=>navigation.navigate(dest)}>
        <Image  style={style} source={require('../rcs/lArrow.png')} />
    </Pressable>
  )
}

export default BackButton
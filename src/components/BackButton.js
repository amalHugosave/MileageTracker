import React from 'react'
import { Pressable ,Image} from 'react-native'

// const handlePress = (dest , navigation)=>{
//   if(dest)
//     navigation.navigate(dest);
//   else
//     navigation.goback();
// }
const BackButton = ({handlePress ,navigation , dest , style}) => {
  return (
    <Pressable onPress={handlePress ? handlePress : () =>navigation.goBack()}>
        <Image  style={style} source={require('../rcs/lArrow.png')} />
    </Pressable>
  )
}

export default BackButton
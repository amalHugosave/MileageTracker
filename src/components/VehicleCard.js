import React from 'react'
import { View , Image, Text } from 'react-native'
import image2 from "./../rcs/2wheeler.png"
import image1 from "./../rcs/2wheeler.png"
import image3 from "./../rcs/4wheeler.png"

const images = [image1 , image2 , image3]

const data ={name : 'Yamaha R15' , type : 2 , engine : 150}
const VehicleCard = () => {
  return (
    <View>
        <Image source={images[0]}/>
        <View>
            <View>
                <Text>{data.name}</Text>
                <Text>{data.type}</Text>
            </View>
            <View>
                <Text>{data.engine}</Text>
            </View>
        </View>
    </View>
  )
}

export default VehicleCard
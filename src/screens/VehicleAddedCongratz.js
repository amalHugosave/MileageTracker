import React, { useEffect } from 'react'
import { SafeAreaView ,Image, StyleSheet , View , Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


const VehicleAddedCongratz = ({route , navigation}) => {
    // const {image , name } = {image : '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' , name : 'Yamaha R15'};
    // console.log(route)
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('vehiclesInfo');
        } , 2000)
    },[])
    const {image , name } = route.params
  return (
    <LinearGradient style={styles.container}  colors={['#C5E3DC', '#F6F6EC']} >
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={image.length > 300 ? { uri: `data:image/png;base64,${image}` } : {uri :image}}/>
            <Image style={styles.congratzImage} source={require('../rcs/contratz.png')}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.nametext}>{name}</Text>
            <Text style={styles.vehadded}>Vehicle Added!</Text>
        </View>
        <Image style={styles.bottomImage} source={require('../rcs/vehicleCongratz.png')} />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center'
    },congratzImage :{
        
    },image :{
        width : 120,
        height : 120,
        borderRadius : 60,
        zIndex : 2,
        position : 'absolute',
        marginTop : 90
    },imageContainer :{
        marginTop : 50,
        alignItems : 'center',
        // justifyContent : 'center',
        marginTop : 60
        // backgroundColor : 'red'
        // justifyContent : 'center'
    },nametext :{
        fontSize : 22,
        color : '#0B3C58',
        textAlign:'center'
    },textContainer :{
        marginTop : 20
    },vehadded :{
        fontSize : 36,
        color : '#0B3C58',
        textAlign : 'center',
        marginTop : 20
    },bottomImage :{
        position : 'absolute',
        bottom : 0,
        width : '100%'
    }
})

export default VehicleAddedCongratz
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet , Image ,FlatList , View ,Text, TouchableOpacity , Pressable ,TouchableHighlight} from 'react-native'

const Picker = ({name, list ,handleSelectChange ,conStyles , type}) => {

    const [ open , setopen]  = useState(false);
    const [curName , setCurName] = useState(name);

const handleButtonPress = ()=>{
    setopen((state)=>!state)
}
const handlePress = (id , Name)=>{
    setopen(false)
    setCurName(Name)
    if(type)
        handleSelectChange(type , parseInt(id))
        
    else
        handleSelectChange(id);
        
}

  return (
   <SafeAreaView style={styles.container}>

    <Pressable onPress={handleButtonPress} style={[styles.button , {width : conStyles}]}>
        <Text style={styles.buttonText}>{curName}</Text>
        <Image style ={styles.buttonImage} source={require('../../rcs/downArrow.png')} />
    </Pressable>

    {
        open &&
    <View style={[styles.dropDown , {width : conStyles}]}>
        {
            list.map((item)=>(
                <TouchableHighlight onPress={()=>handlePress(item._id , item.name)} key={item._id} underlayColor='#D9F0F1' style={styles.dropDownButton}><Text style={styles.dropDowntext}>{item.name}</Text></TouchableHighlight>
            ))

        }
    </View>}
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container :{
        // position : 'absolute',
        zIndex : 1,
        alignItems : 'center',
        marginTop : 20,
        // justifyContent : 'center'
    },button : {
        paddingVertical: 12,
        paddingHorizontal: 10,
        backgroundColor : 'white',
        flexDirection : 'row',
        // width : 170,
        borderRadius : 10,
        alignItems : 'center'
        // justifyContent : 'space-between'
    },dropDown : {
        position : 'absolute',
        zIndex : 1,
        // width : 170,
        marginTop : 50,
        backgroundColor : 'white'
    },buttonText : {
        textAlign : 'center',
        fontSize: 16,
        width : '100%',
        color : '#0B3C58'
    },buttonImage : {
        position : 'absolute',
        right : 10,
        // marginVertical : 'auto'

    },dropDowntext :{
        fontSize: 16,
        textAlign : 'center',
        color : '#0B3C58'
    },dropDownButton :{
        paddingVertical : 16,
    }
})

export default Picker;
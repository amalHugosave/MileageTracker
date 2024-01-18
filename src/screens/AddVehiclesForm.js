import React from 'react'
import { StyleSheet, View , Text , Image , TextInput , Button   } from 'react-native'
import HeaderWithBackbutton from '../components/HeaderWithBackbutton'
import RNPickerSelect from 'react-native-picker-select';
const AddVehiclesForm = ({navigation}) => {

const handlePress = ()=>{
  navigation.navigate('vehicles');
}

  return (
    <View style={styles.container}>
        <HeaderWithBackbutton handlePress={handlePress} />
        <Text style={styles.heading}> Add Vehicles</Text>
        <Image source={require('../rcs/addPhoto.png')} />
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder='Vehicle Name'/>

            <RNPickerSelect
            style={{...pickerSelectStyles}}
            placeholder={{
                label: 'Vehicle Name',
                value: null,
              }}
            onValueChange={(value) => console.log(value)}
            items={[
                { label: '2 Wheeler', value: '2' },
                { label: '3 Wheeler', value: '3' },
                { label: '4 Wheeler', value: '4' },
                { label: 'other', value: 'other' },
            ]}
            />
            
            <TextInput style={styles.input} placeholder='Engine CC'/>
        </View>
        <View style={styles.bottom}>
            <Button  title="Cancel" />
            <Button  title="Add" color="#0B3C58"/>

        </View>
    </View>

    
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#F0F2F2',
        alignItems : 'center'
    },
    input : {
        backgroundColor : 'white',
        width : 300,
        borderRadius : 7,
        marginTop : 20,
        paddingRight: 30,
        padding : 4,
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'gray',
    },
    inputContainer : {
        alignItems : 'center'
    },
    heading : {
        fontSize : 30,
        color : 'black',
        textAlign : 'center'
    },bottom : {
        flexDirection : "row",
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent : 'center',
        paddingBottom : 20
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        // marginLeft : 35,
        marginTop : 20,
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      color: 'black',
      backgroundColor : 'white',
      width : 300,
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        // marginLeft : 30,
        marginTop : 20,
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 8,
      color: 'black',
      backgroundColor : 'white',
      width : 300,
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });

export default AddVehiclesForm
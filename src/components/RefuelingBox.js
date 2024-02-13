import React, { useEffect, useState } from 'react'
import { StyleSheet, View ,Text ,ScrollView, Dimensions} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import moment from 'moment';
import RefuelingCard from './RefuelingCard';
import { useQuery } from '@realm/react';
import { Refueling } from '../Database/models/RefuelingSchema';
import Picker from './Picker/Picker';

const rnpData = [
    {name : 'All Time' , _id : 3},
    {name : 'Last 1 Year' , _id : 2},
    {name : 'Last 30 Days' , _id : 1},
    {name : 'Last 7 Days' , _id : 0},
]
const RefuelingBox = ({data , navigation}) => {
    console.log(rnpData[0])
    const today = moment();
    const [filteredData , setFilteredData] = useState(data); 
    const [value , setvalue] = useState(3);
    const allRefueling = useQuery(Refueling);
    const [rnpDataName , setRnpDataName] = useState(rnpData[0].name);
    // console.log(rnpDataName);
    useEffect(()=>{
        handleSelectChange(value);
    } , [allRefueling]);


    const handleSelectChange = (value)=>{
        const current = new Date();
        const date =new Date();
        if(value == 1){
            date.setDate(current.getDate() - 30);
            setvalue(1);
            setRnpDataName(rnpData[2].name);
        }else if(value == 0){
            date.setDate(current.getDate() - 7);
            setvalue(0);
            setRnpDataName(rnpData[3].name);
        }else if(value == 2){
            date.setFullYear(current.getFullYear() - 1);
            setvalue(2)
            setRnpDataName(rnpData[1].name);
        }else{
            setFilteredData(data);
            setvalue(3)
            setRnpDataName(rnpData[0].name);
            return;
        }
        // console.log(date.toString());
        const newData = data.filter((curdata)=> curdata.date >= date);
        setFilteredData(newData);

    }
  return (
    <View style={styles.container}>
        <View style={styles.PickerCont}>
        <Picker name={rnpDataName} list={rnpData} handleSelectChange={handleSelectChange} conStyles={175}/>
            {/* <RNPickerSelect
                style={{...pickerSelectStyles}}
                placeholder={{}}
                onValueChange={(value) => {handleSelectChange(value)}}
                items={rnpData}
            /> */}
            <Text style={styles.heading}>{filteredData.length} Records | {value === 3 ? 'All Time' : today.subtract(value == 0 ? 7 : value == 1 ?30 : 1 , value == 2 ? 'years' :'days').format('DD/MMM/YY') + "- Today"}</Text>
        </View>

        <ScrollView style={styles.refuelingDataBox}>
            {
                filteredData.map((el , index)=>
                    <RefuelingCard key={index} data={el} ind={1} navigation={navigation}/>
                )
            }
        </ScrollView>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        width : Dimensions.get('window').width,
        paddingHorizontal : 30,
        flex : 1,
        // backgroundColor : 'red',
        zIndex : 0
    },heading :{
        textAlign : 'center',
        marginTop : 20
    },refuelingDataBox : {
        marginTop : 30
    },PickerCont:{
        zIndex : 1
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        marginLeft : 82,
        marginVertical : 10,

      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      color: 'black',
      backgroundColor : 'white',
      width : 175,
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        marginLeft : 82,
       marginVertical : 10,
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 8,
      color: 'black',
      backgroundColor : 'white',
      width : 175,
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });

export default RefuelingBox
import React, { useEffect, useState } from 'react'
import { StyleSheet, View ,Text ,ScrollView, Dimensions} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import moment from 'moment';
import RefuelingCard from './RefuelingCard';
import { useQuery } from '@realm/react';
import { Refueling } from '../Database/models/RefuelingSchema';


const rnpData = [
    {label : 'All Time' , value : 3},
    {label : 'Last 1 Year' , value : 2},
    {label : 'Last 30 Days' , value : 1},
    {label : 'Last 7 Days' , value : 0},
]
const RefuelingBox = ({data , navigation}) => {
    const today = moment();
    const [filteredData , setFilteredData] = useState(data); 
    const [value , setvalue] = useState(3);
    const allRefueling = useQuery(Refueling);

    useEffect(()=>{
        handleSelectChange(value);
    } , [allRefueling]);


    const handleSelectChange = (value)=>{
        const current = new Date();
        const date =new Date();
        if(value == 1){
            date.setDate(current.getDate() - 30);
            setvalue(1)
        }else if(value == 0){
            date.setDate(current.getDate() - 7);
            setvalue(0)
        }else if(value == 2){
            date.setFullYear(current.getFullYear() - 1);
            setvalue(2)
        }else{
            setFilteredData(data);
            setvalue(3)
            return;
        }
        // console.log(date.toString());
        const newData = data.filter((curdata)=> curdata.date >= date);
        console.log(newData);
        setFilteredData(newData);

    }
  return (
    <View style={styles.container}>
        <View>
            <RNPickerSelect
                style={{...pickerSelectStyles}}
                placeholder={{}}
                onValueChange={(value) => {handleSelectChange(value)}}
                items={rnpData}
            />
            <Text style={styles.heading}>{data.length} Records | {today.subtract(30 , 'days').format('DD/MMM/YY')} - Today</Text>
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
        paddingHorizontal : 30
    },heading :{
        textAlign : 'center'
    },refuelingDataBox : {
        marginTop : 30
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
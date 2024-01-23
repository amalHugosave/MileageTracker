import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import RefuelingInfo from '../screens/RefuelingInfo';
import RefuelingForm from '../screens/RefuelingForm';
import EdtingRefuelingData from '../screens/EdtingRefuelingData';
const Stack = createNativeStackNavigator();

const RefuelingNav = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="refuelingInfo" component={RefuelingInfo} options={{headerShown : false}}/>
        <Stack.Screen name='refuelingForm' component={RefuelingForm} options={{headerShown : false}} />
        <Stack.Screen name='editingRefuelingForm' component={EdtingRefuelingData} options={{headerShown : false}} />
    </Stack.Navigator>
  )
}

export default RefuelingNav
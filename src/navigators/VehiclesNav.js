import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Vehicles from '../screens/Vehicles';
import AddVehiclesForm from '../screens/AddVehiclesForm';
const Stack = createNativeStackNavigator();
const VehiclesNav = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="vehicles" component={Vehicles} options={{headerShown : false}}/>
        <Stack.Screen name="addVehiclesForm" component={AddVehiclesForm} options={{headerShown : false}}/>
    </Stack.Navigator>
  )
}

export default VehiclesNav
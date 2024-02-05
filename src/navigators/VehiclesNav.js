import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VehiclesInfo from '../screens/VehiclesInfo';
import AddVehiclesForm from '../screens/AddVehiclesForm';
import VehicleAddedCongratz from '../screens/VehicleAddedCongratz';
const Stack = createNativeStackNavigator();
const VehiclesNav = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="vehiclesInfo" component={VehiclesInfo} options={{headerShown : false}}/>
        <Stack.Screen name="addVehiclesForm" component={AddVehiclesForm} options={{headerShown : false}}/>
        <Stack.Screen name="congratz" component={VehicleAddedCongratz} options={{headerShown : false}}/>

    </Stack.Navigator>
  )
}

export default VehiclesNav
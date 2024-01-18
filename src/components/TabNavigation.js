import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfilePage from '../screens/ProfilePage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native';
import { Image } from 'react-native-svg';
import AddVehiclesForm from '../screens/AddVehiclesForm';
import Vehicles from '../screens/Vehicles';
import VehiclesNav from '../navigators/VehiclesNav';
// import Icon from 'react-native-ico-material-design';
const Tab = createBottomTabNavigator();
const myIcon = <Icon name="rocket" size={30} color="#900" />;
const TabNavigation = () => {
  return (
         <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => <Icon name='rocket' />
          ,tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen  name="Home" component={ProfilePage}  options={{headerShown : false}}/>
            <Tab.Screen name="vehicles" component={VehiclesNav} options={{headerShown : false}}/>
         </Tab.Navigator>
  )
}

export default TabNavigation
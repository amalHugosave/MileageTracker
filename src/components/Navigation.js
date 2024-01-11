import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfilePage from '../screens/ProfilePage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text ,v} from 'react-native';
import { Image } from 'react-native-svg';
// import Icon from 'react-native-ico-material-design';
const Tab = createBottomTabNavigator();
const myIcon = <Icon name="rocket" size={30} color="#900" />;
const Navigation = () => {
  return (
         <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => <Icon name='rocket' />
          ,tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen  name="profile" component={ProfilePage}  />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
         </Tab.Navigator>
  )
}

export default Navigation

import React from 'react';


import { NavigationContainer } from '@react-navigation/native';


import {
  StyleSheet,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import SignUp from './src/screens/SignUp';
import CreateAccounts from './src/screens/CreateAccounts';
import SetPasscode from './src/screens/SetPasscode';
import ProfilePage from './src/screens/ProfilePage';
import TabNavigation from './src/components/TabNavigation';
import {RealmProvider} from '@realm/react';
import { Users } from './src/Database/models/UsersSchema';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();

const App = ()=> {
  // console.log(Stack.Navigator);
  return (
    <RealmProvider schema={[Users]}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="splash" component={Splash} options={{headerShown : false}}/> */}
          {/* <Stack.Screen name="signUp" component={SignUp} options={{headerShown : false}} />
          <Stack.Screen name="createAccount" component={CreateAccounts} options={{headerShown : false}} />
          <Stack.Screen name="setPasscode" component={SetPasscode} options={{headerShown : false}} /> */}
          <Stack.Screen name="login" component={Login} options={{headerShown : false}} />
          <Stack.Screen name="tabNavigation" component={TabNavigation} options={{headerShown : false}} />
          

        </Stack.Navigator>
      </NavigationContainer>
    </RealmProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

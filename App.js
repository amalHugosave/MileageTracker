
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import SignUp from './src/screens/SignUp';

const Stack = createNativeStackNavigator();

const App = ()=> {
  console.log(Stack.Navigator);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="splash" component={Splash} options={{headerShown : false}}/> */}
        <Stack.Screen name="signUp" component={SignUp} options={{headerShown : false}} />
      </Stack.Navigator>
    </NavigationContainer>
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

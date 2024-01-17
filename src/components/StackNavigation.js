import React from 'react'

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="splash" component={Splash} options={{headerShown : false}}/> */}
          <Stack.Screen name="signUp" component={SignUp} options={{headerShown : false}} />
          <Stack.Screen name="createAccount" component={CreateAccounts} options={{headerShown : false}} />
          <Stack.Screen name="setPasscode" component={SetPasscode} options={{headerShown : false}} />
          <Stack.Screen name="login" component={Login} options={{headerShown : false}} />
          <Stack.Screen name="tabNavigation" component={TabNavigation} options={{headerShown : false}} />
          

        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default StackNavigation
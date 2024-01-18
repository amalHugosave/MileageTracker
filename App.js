
import React from 'react';
import {RealmProvider} from '@realm/react';
import { Users } from './src/Database/models/UsersSchema';
import StackNavigationOnboarding from './src/components/StackNavigationOnboarding';
import SelectInitialPage from './src/components/SelectInitialPage';
import Login from './src/screens/Login';
const App = ()=> {
  return (
    <RealmProvider schema={[Users]}>
      {/* <StackNavigationOnboarding /> */}
      <SelectInitialPage />
      {/* <Login /> */}
    </RealmProvider>
  );
}

export default App;

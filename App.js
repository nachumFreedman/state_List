import React from 'react';
import States from "./src/components";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, persistor } from './src/store';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar backgroundColor="#000" barStyle="light-content" />
          <States />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};
export default App;

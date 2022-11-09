/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { Text, View ,Button } from 'react-native';
 import ReduxDemo from './ReduxDemo';
 import store from './src/app/store'
import { Provider } from 'react-redux'
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import PhoneSignIn from "./src/PhoneNumberLogin/PhoneAuth"
import AppStack from "./src/Navigation/Appstack"
import { NavigationContainer} from '@react-navigation/native';

let persistor = persistStore(store)

 
 
 const App = () => {
   return (
   
      <View style={{ flex: 1 }}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <PhoneSignIn />
      </PersistGate>
    </Provider>
   </View>
   )
 }
 export default App;
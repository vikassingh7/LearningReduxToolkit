import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReduxDemo from '../../ReduxDemo';
import PhoneSignIn from '../PhoneNumberLogin/PhoneAuth';
const Stack = createNativeStackNavigator();

function AppStack() {
    return (
      <NavigationContainer >
        <Stack.Navigator>
        <Stack.Screen name="PhoneSignIn" component={PhoneSignIn} />
          <Stack.Screen name="ReduxDemo" component={ReduxDemo} />
       
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppStack;

const styles = StyleSheet.create({})
import React, { useState } from 'react';
import { Button, TextInput,View,Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 export default function PhoneSignIn({ navigation }) {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    
     // alert("loginSuceesfully")
    } catch (error) {
        navigation.navigate('ReduxDemo')
      console.log(error);
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+919559137747')}
      />
    );
  }

  return (
    <View style ={{alignItems:"center",justifyContent:"center"}}>
      <Text>jhhjhhhhhhhhhhhhhh</Text>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </View>
  );
}
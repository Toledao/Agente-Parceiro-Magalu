import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './sources/pages/Login';

export default function AgenteParceiro() {

  const Stack = createNativeStackNavigator();

 return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
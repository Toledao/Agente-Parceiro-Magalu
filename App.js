import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './sources/pages/Login';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function AgenteParceiro() {

  const Stack = createNativeStackNavigator();

 return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen 
      name="Login" 
      component={Login}
      options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

EStyleSheet.build({ // VARIÁVEIS GLOBAIS
  $background: '#0086FE',
  $PrimaryBTN: "#58c22e"
})
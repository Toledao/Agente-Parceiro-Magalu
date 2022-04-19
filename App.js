import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './sources/pages/Login';
import Detalhes from './sources/pages/Detalhes';
import TelaInicial from './sources/pages/TelaInicial';
import ListaParceiro from './sources/pages/ListaParceiro';
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
      <Stack.Screen 
      name="TelaInicial" 
      component={TelaInicial}
      options={{headerShown: false}}
      />
      <Stack.Screen 
      name="Detalhes" 
      component={Detalhes}
      options={{ 
      title: 'Detalhes do Parceiro',
      headerStyle:{
        backgroundColor: '#0086FE'
      },
      headerTintColor: '#FFF',
      headerShown: true,
      headerShadowVisible: false,
      headerBackTitle: 'Voltar'
         }}
      />
      <Stack.Screen 
      name="ListaParceiro" 
      component={ListaParceiro}
      options={{ 
      title: '',
      headerStyle:{
        backgroundColor: '#0086FE'
      },
      headerTintColor: '#FFF',
      headerShown: true,
      headerShadowVisible: false,
      headerBackTitle: 'Voltar'
         }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

EStyleSheet.build({ // VARIÁVEIS GLOBAIS
  $background: '#0086FE',
  $PrimaryBTN: "#58c22e",
  $txtcolor: '#FFF'
})
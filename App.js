import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './sources/pages/Login';
import Detalhes from './sources/pages/Detalhes';
import TelaInicial from './sources/pages/TelaInicial';
import ListaParceiro from './sources/pages/ListaParceiro';
import ListaRoteiro from './sources/pages/ListaRoteiro';
import EStyleSheet from 'react-native-extended-stylesheet';
import CheckList from './sources/pages/CheckList';
import ResetSenha from './sources/pages/ResetSenha';
import TelaInicialADM from './sources/pages/Administrativo/TelaInicialADM';
import NewVisitaDate from './sources/pages/NewVisitaDate';
import Agentes from './sources/pages/Administrativo/Agentes';
import Opotunidades from './sources/pages/Oportunidades'
import { Provider } from 'react-redux';
import store, {persistor} from './sources/store';
import { PersistGate } from 'redux-persist/integration/react';
import AgentesCadAgente from './sources/pages/Administrativo/AgentesCadAgente';
import AgentesDetalhes from './sources/pages/Administrativo/AgentesDetalhes';

export default function AgenteParceiro() {

  const Stack = createNativeStackNavigator();

 return (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen 
          name="Login" 
          component={Login}
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="ResetSenha" 
          component={ResetSenha}
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
          <Stack.Screen 
          name="ListaRoteiro" 
          component={ListaRoteiro}
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
          <Stack.Screen 
          name="CheckList" 
          component={CheckList}
          options={{ 
          title: 'CheckList',
          headerStyle:{
            backgroundColor: '#0086FE'
          },
          headerTintColor: '#FFF',
          headerShown: true,
          headerShadowVisible: false,
          headerBackTitle: 'Voltar',
             }}
          />
          <Stack.Screen 
          name="NewVisitaDate" 
          component={NewVisitaDate}
          options={{ 
          title: '',
          headerStyle:{
            backgroundColor: '#0086FE'
          },
          headerTintColor: '#FFF',
          headerShown: true,
          headerShadowVisible: false,
          headerBackTitle: 'Voltar',
             }}
          />
          <Stack.Screen 
          name="TelaInicialADM" 
          component={TelaInicialADM}
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="Agentes" 
          component={Agentes}
          options={{ 
            title: '',
            headerStyle:{
              backgroundColor: '#0086FE'
            },
            headerTintColor: '#FFF',
            headerShown: true,
            headerShadowVisible: false,
            headerBackTitle: 'Voltar',
               }}
          />
          <Stack.Screen 
          name="Oportunidades" 
          component={Opotunidades}
          options={{ 
            title: '',
            headerStyle:{
              backgroundColor: '#0086FE'
            },
            headerTintColor: '#FFF',
            headerShown: true,
            headerShadowVisible: false,
            headerBackTitle: 'Voltar',
               }}
          />
          <Stack.Screen 
          name="AgentesCadAgente" 
          component={AgentesCadAgente}
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
          <Stack.Screen 
          name="AgentesDetalhes" 
          component={AgentesDetalhes}
          options={{ 
          title: 'Detalhes do Agente',
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
    </PersistGate>
  </Provider>
  );
}

EStyleSheet.build({ // VARIÁVEIS GLOBAIS
  $background: '#0086FE',
  $PrimaryBTN: "#58c22e",
  $txtcolor: '#FFF',
  $txtTitulo: '1.8rem'
})
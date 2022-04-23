import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, TouchableHighlight, Image} from 'react-native';
import Styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import * as loginAction from '../../store/modules/login/actions'


export default function Login() {
  const navigation = useNavigation()
  const dispatch = useDispatch();

  const isloading = useSelector(state => state.Login.isloading);
  const islogged = useSelector(state => state.Login.logado);

  useEffect(()=>{
    if (islogged){
      navigation.navigate("TelaInicial")
    }
  })


  function Logar(){
    //Fazer o login

    dispatch(loginAction.logarRequest({email:"joao@tome.com", senha:'123'}))
    
  }

 return (
   <SafeAreaView style={Styles.container}>
     <Loading isLoading={isloading}/>
       <View style={Styles.areaLogin}>
        <View style={Styles.loginimagem}>
          <Image source={require('../../components/Logos/LOGOAGENTE.png')} style={{height: 150, width: 300}}  /> 
        </View>

        <TextInput style={Styles.inputs} keyboardType="email-address" placeholder="Digite seu e-mail"/>
        <TextInput style={Styles.inputs} secureTextEntry placeholder="Senha"/>
        <TouchableOpacity style={Styles.btnLogin} onPressOut={() => Logar()}>
            <Text style={Styles.txtLogin}>Fazer Login</Text>
        </TouchableOpacity>
       </View>
   </SafeAreaView>
  );
}
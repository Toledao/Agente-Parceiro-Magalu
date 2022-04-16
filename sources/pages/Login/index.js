import React from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableHighlight } from 'react-native';
import Styles from './styles';

export default function Login() {
 return (
   <SafeAreaView style={Styles.container}>
       <View style={Styles.areaLogin}>
        <TextInput style={Styles.inputs} keyboardType="email-address" placeholder="Digite seu e-mail"/>
        <TextInput style={Styles.inputs} secureTextEntry placeholder="Senha"/>
        <TouchableHighlight style={Styles.btnLogin}>
            <Text style={Styles.txtLogin}>Fazer Login</Text>
        </TouchableHighlight>
       </View>
   </SafeAreaView>
  );
}
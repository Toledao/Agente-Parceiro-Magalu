import React from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableHighlight} from 'react-native';
import style from './estilo'

export default function AgenteParceiro() {
 return (
   <View style={style.background}>
    <SafeAreaView style={style.centralizar}>
      <TextInput style={[style.input,style.login]} placeholder="Digite seu e-mail"/>
      <TextInput style={[style.input,style.login]} placeholder="Senha"/>
      <TouchableHighlight style={[style.botao, style.botaoLogin]}>
        <Text style={[style.corBranco, style.negrito]}>Fazer Login</Text>
      </TouchableHighlight>
    </SafeAreaView>
   </View>
  );
}



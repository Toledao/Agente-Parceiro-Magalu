import React from 'react';
import { View, SafeAreaView, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Styles from './styles';

export default function AgentesCadAgente() {
 return (
   <SafeAreaView style={Styles.container}>
    <View style={Styles.areaTitulo}>
      <Text style={Styles.txtTitulo}>NOVO AGENTE MAGALU</Text>
    </View>
    <ScrollView style={Styles.areaFormulario}>
      <View style={Styles.forms}>
      <Text style={Styles.txtForm}>Nome do agente</Text>
      <TextInput
      style={Styles.txtInputForm}
      placeholder='Nome do Agente'
      />
      <Text style={Styles.txtForm}>CPF</Text>
      <TextInput
      style={Styles.txtInputForm}
      placeholder='Nome do Agente'
      />
      <Text style={Styles.txtForm}>E-mail</Text>
      <TextInput
      style={Styles.txtInputForm}
      placeholder='Nome do Agente'
      />
      <Text style={Styles.txtForm}>Senha</Text>
      <TextInput
      style={Styles.txtInputForm}
      placeholder='Nome do Agente'
      />
      <Text style={Styles.txtForm}>Confirme a Senha</Text>
      <TextInput
      style={Styles.txtInputForm}
      placeholder='Nome do Agente'
      />
      </View>
      <View style={Styles.AreaBTN}>
        <TouchableOpacity style={Styles.btnCadastrar}>
          <Text>Cadastrar Agente</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
   </SafeAreaView>
  );
}
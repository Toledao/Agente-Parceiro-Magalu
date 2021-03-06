import React from 'react';
import { View, SafeAreaView, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Styles from './styles';


export default function AgentesCadAgente() {

  const id = "1"

 return (
   <SafeAreaView style={Styles.container}>
    <View style={Styles.areaTitulo}>
      <Text style={Styles.txtTitulo}>{id == "" ? "Novo Agente Magalu" : "Editar Agente"}</Text>
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
      placeholder='000.000.000-00'
      />
      <Text style={Styles.txtForm}>E-mail</Text>
      <TextInput
      style={Styles.txtInputForm}
      placeholder='exemplo@gmail.com'
      />
      <Text style={Styles.txtForm}>Senha</Text>
      <TextInput
      style={Styles.txtInputForm}
      placeholder='sua senha'
      />
      <Text style={Styles.txtForm}>Confirme a Senha</Text>
      <TextInput
      style={Styles.txtInputForm}
      placeholder='confirme sua senha'
      />
      </View>
      <View style={Styles.AreaBTN}>
        <TouchableOpacity style={Styles.btnCadastrar}>
          <Text>Cadastrar Agente</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.AreaBTN}>
        <TouchableOpacity style={[Styles.btnCadastrar, {backgroundColor: '#DA3434'}]}>
          <Text>Excluir agente</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
   </SafeAreaView>
  );
}
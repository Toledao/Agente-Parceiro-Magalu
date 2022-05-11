import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Oportunidades() {

 return (
  <KeyboardAwareScrollView enableOnAndroid showsVerticalScrollIndicator={false} bounces={false} >
    <View style={Styles.container}>
      <View style={Styles.areaHeader}>
        <View style={Styles.areaParData}>
              <Text style={Styles.txtTitulos}>Nova</Text>
              <Text style={Styles.txtParData}>Oportunidade de Seller</Text>
        </View>
      </View>
      <View style={Styles.areaForms}>
        <View style={Styles.AreaPergunta}>
          <Text style={Styles.txtPerguntas}>Contato:</Text>
          <TextInput style={Styles.input} placeholder="Insira o Contato"/>
        </View>
        <View style={Styles.AreaPergunta}>
          <Text style={Styles.txtPerguntas}>Nome:</Text>
          <TextInput style={Styles.input} placeholder="Insira o Nome"/>
        </View>
        <View style={Styles.AreaPergunta}>
          <Text style={Styles.txtPerguntas}>Celular:</Text>
          <TextInput style={Styles.input} placeholder="Insira o Celular"/>
        </View>
        <View style={Styles.AreaPergunta}>
          <Text style={Styles.txtPerguntas}>Email:</Text>
          <TextInput style={Styles.input} placeholder="Insira o Email"/>
        </View>
        <View style={Styles.AreaPergunta}>
          <Text style={Styles.txtPerguntas}>Endereço:</Text>
          {/* <TextInput style={Styles.input} placeholder="Insira o Endereço"/> */}
          <View style={Styles.areaEndereco}>
          <View style={{width: "35%"}}>
              <Text style={Styles.txtPerguntas}>CEP:</Text>
              <TextInput style={Styles.input} placeholder="Insira o Email"/>
            </View>
            <View style={{width: "45%"}}>
              <Text style={Styles.txtPerguntas}>Cidade:</Text>
              <TextInput style={Styles.input} placeholder="Insira a Cidade"/>
            </View>
            <View style={{width: '15%'}}>
              <Text style={Styles.txtPerguntas}>UF:</Text>
              <TextInput style={Styles.input} placeholder="UF"/>
            </View>
            
            <View style={{width: '65%'}}>
              <Text style={Styles.txtPerguntas}>Rua:</Text>
              <TextInput style={Styles.input} placeholder="Insira a rua"/>
            </View>
            <View style={{width: '25%'}}>
              <Text style={Styles.txtPerguntas}>Numero:</Text>
              <TextInput style={Styles.input} placeholder="Numero"/>
            </View>
            <View style={{width: '100%'}}>
              <Text style={Styles.txtPerguntas}>Complemento:</Text>
              <TextInput style={Styles.input} placeholder="Insira o Complemento"/>
            </View>
          </View>
        </View>
      </View>
      <View style={Styles.AreaBTN}>
          <TouchableOpacity style={Styles.btnEnviar}>
          <Text style={Styles.txtEnviar}>Enviar Oportunidade</Text>
          </TouchableOpacity>
      </View>
    </View>
  </KeyboardAwareScrollView>
  );
}


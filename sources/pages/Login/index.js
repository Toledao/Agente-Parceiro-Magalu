import React from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, TouchableHighlight, Image} from 'react-native';
import Styles from './styles';
import { useNavigation } from '@react-navigation/native';



export default function Login() {
 const navigation = useNavigation()

  function Logar(){
    //Fazer o login


    navigation.navigate('TelaInicial')
  }

 return (
   <SafeAreaView style={Styles.container}>
       <View style={Styles.areaLogin}>
        <View style={Styles.loginimagem}>
          <Image source={require('../../components/Logos/LOGOAGENTE.png')} style={{height: 150, width: 300}}  /> 
          {/* Colocar Imagem Aqui */}
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
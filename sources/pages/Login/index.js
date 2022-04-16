import React from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, TouchableHighlight} from 'react-native';
import Styles from './styles';
import { useNavigation } from '@react-navigation/native';



export default function Login() {
 const navigation = useNavigation()
 return (
   <SafeAreaView style={Styles.container}>
       <View style={Styles.areaLogin}>
        <TextInput style={Styles.inputs} keyboardType="email-address" placeholder="Digite seu e-mail"/>
        <TextInput style={Styles.inputs} secureTextEntry placeholder="Senha"/>
        <TouchableOpacity style={Styles.btnLogin}>
            <Text style={Styles.txtLogin} onPress={() => navigation.navigate('TelaInicial')}>Fazer Login</Text>
        </TouchableOpacity>
       </View>
   </SafeAreaView>
  );
}
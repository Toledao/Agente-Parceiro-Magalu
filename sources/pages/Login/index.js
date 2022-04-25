import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, TouchableHighlight, Image} from 'react-native';
import Styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import * as loginAction from '../../store/modules/login/actions'
import AwesomeAlert from 'react-native-awesome-alerts';


export default function Login() {
  const navigation = useNavigation()
  const dispatch = useDispatch();

  const isloading = useSelector(state => state.Login.isloading);
  const islogged = useSelector(state => state.Login.logado);
  const errologin = useSelector(state => state.Login.errologin);

  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [ShowAlert, setShowAlert] = useState(false)

  useEffect(()=>{
    if (islogged){
      //verificar se vai para a pagina do adm ou do agente normal

      navigation.navigate("TelaInicial")
    }

    setShowAlert(errologin)
  })


  function Logar(){
    //Fazer o login


    //navigation.navigate('TelaInicialADM') Salvation ADM
    //dispatch(loginAction.logarRequest({email:"joao@tome.com", senha:'123'}))
    dispatch(loginAction.logarRequest({email:Email, senha:Senha}))
  }

  return (
    <SafeAreaView style={Styles.container}>
      <Loading isLoading={isloading}/>
        <View style={Styles.areaLogin}>
        <View style={Styles.loginimagem}>
          <Image source={require('../../components/Logos/LOGOAGENTE.png')} style={{height: 150, width: 300}}  /> 
        </View>

        <TextInput style={Styles.inputs} keyboardType="email-address" placeholder="Digite seu e-mail" onChangeText={setEmail}/>
        <TextInput style={Styles.inputs} secureTextEntry placeholder="Senha" onChangeText={setSenha}/>
        <TouchableOpacity style={Styles.btnLogin} onPressOut={() => Logar()}>
            <Text style={Styles.txtLogin}>Fazer Login</Text>
        </TouchableOpacity>
        </View>

        <AwesomeAlert
          show={ShowAlert}
          showProgress={false}
          title="Login"
          message="Email ou senha Invalidos"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
            dispatch(loginAction.reseterro())
          }}
        />
    </SafeAreaView>
  );
}
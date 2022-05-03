import React, { useEffect, useState, useRef } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, Keyboard} from 'react-native';
import Styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import * as ResetActions from '../../store/modules/resetSenha/actions'
import AwesomeAlert from 'react-native-awesome-alerts';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';


export default function ResetSenha() {
  const navigation = useNavigation()
  const dispatch = useDispatch();

  const textEmail = useRef(null)
  const textSenha = useRef(null)

  const erro = useSelector(state => state.ResetSenha.error);
  const isWaitingCodigo = useSelector(state => state.ResetSenha.waitingCodigo);
  const isDone = useSelector(state => state.ResetSenha.done);
  const EmailState = useSelector(state => state.ResetSenha.email);
  const isAprovado = useSelector(state => state.ResetSenha.codigoAprovado)
  const senhaAprovado = useSelector(state => state.ResetSenha.senhaAprovado)

  const [isloading, setIsloading] = useState(false)
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [value, setValue] = useState('');
  const [ShowAlert, setShowAlert] = useState(false);
  const [Mensagem, setMensagem] = useState("");
  const CELL_COUNT = 6;

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  


  useEffect(()=>{
    if(isDone){
      setIsloading(false)
      if(erro){
        setShowAlert(true)
        setMensagem("Ocoreu um erro, por favor tente novamente.")
      }
      if (senhaAprovado){
        setShowAlert(true)
        setMensagem("Senha Alterada com sucesso")
      }

    }
  })


  function requestCodigo(){
    dispatch(ResetActions.PedidoRequest({"email":Email}))
    setIsloading(true)
    Keyboard.dismiss()
  }

  function enviarCodigo(){
    dispatch(ResetActions.CodigoRequest({"email":EmailState, "codigo": value}))
    setIsloading(true)
    Keyboard.dismiss()
  }

  function novaSenha(){
    dispatch(ResetActions.NovaSenhaRequest({"email":EmailState, "senha": Senha}))
    setIsloading(true)
    Keyboard.dismiss()
  }

  return (
    <SafeAreaView style={Styles.container}>
        <Loading isLoading={isloading}/>
        <View style={Styles.areaLogo}>
            <TouchableOpacity style={Styles.voltar} onPress={() => { dispatch(ResetActions.sair()) ;navigation.navigate("Login")}}>
                <Icon name="chevron-back-outline" size={40} color={'#FFF'}/>
                <Text style={Styles.txtvoltar}>Voltar</Text>
            </TouchableOpacity>
            <View style={{position: "absolute", width: '100%', alignItems: "center"}}>
                <Image source={require('../../static/Logo/LOGOAGENTE.png')} style={{height: 55, width: 140}}  />
            </View>
        </View>

        <View style={Styles.areaLogin}>
            
          <Text style={Styles.txtReset}>Recuperação de Senha</Text>
            <View style={ !isWaitingCodigo && !isAprovado ? Styles.areainput : {display: "none"}}>
                <Text style={Styles.txtemail}>Para recuperar a senha, informe o endereço de email.</Text>
                <TextInput style={Styles.inputs} keyboardType="email-address" placeholder="Digite seu e-mail " onChangeText={setEmail} ref={textEmail}/>
            
                <TouchableOpacity style={Styles.btnLogin} onPressOut={() => requestCodigo()}>
                  <Text style={Styles.txtLogin}>Recuperar a Senha</Text>
                </TouchableOpacity>
            </View>

            <View style={ isWaitingCodigo && !isAprovado ? Styles.areainput : {display: "none"}}>
                <Text style={Styles.txtemail}>Foi enviado uma mensagem para o email informado contendo um codigo, insira o codigo aqui:</Text>
                <CodeField
                  ref={ref}
                  {...props}
                  // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                  value={value}
                  onChangeText={setValue}
                  cellCount={CELL_COUNT}
                  keyboardType="default"
                  rootStyle={Styles.codeFieldRoot}
                  textContentType="oneTimeCode"
                  renderCell={({index, symbol, isFocused}) => (
                    <View
                      // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                      onLayout={getCellOnLayoutHandler(index)}
                      key={index}
                      style={[Styles.cellRoot, isFocused && Styles.focusCell]}>
                      <Text style={Styles.cellText}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                      </Text>
                    </View>
                  )}
                />

                <TouchableOpacity style={Styles.btnLogin} onPressOut={() => enviarCodigo()}>
                  <Text style={Styles.txtLogin}>Enviar Codigo</Text>
                </TouchableOpacity>
            </View>

            <View style={ !isWaitingCodigo && isAprovado ? Styles.areainput : {display: "none"}}>
                <Text style={Styles.txtemail}>Codigo Valido, insira a nova senha</Text>
                <TextInput style={Styles.inputs} secureTextEntry placeholder="Digite a nova senha" onChangeText={setSenha} ref={textSenha}/>
            
                <TouchableOpacity style={Styles.btnLogin} onPressOut={() => novaSenha()}>
                  <Text style={Styles.txtLogin}>Alterar a Senha</Text>
                </TouchableOpacity>
            </View>



        </View>

        <AwesomeAlert
          show={ShowAlert}
          showProgress={false}
          title="Recuperação de Senha"
          message={Mensagem}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
            setShowAlert(false)
            dispatch(ResetActions.sair())
            navigation.navigate("Login")
          }}
        />


    </SafeAreaView>
  );
}
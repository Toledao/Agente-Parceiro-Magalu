import React, {useState} from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, ScrollView, TextInput, Image, Keyboard} from 'react-native';
import Styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import AtalhosIcon from '../../../components/AtalhosIcon';
import Card from '../../../components/ScrollVisitas/Card'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import ScrollParceiros from '../../../components/ScrollParceiros';
import CardSelecao from '../../../components/Administrativo/CardSelecao';
import { useSelector, useDispatch } from 'react-redux';
import { deslogar } from '../../../store/modules/auth/actions';

export default function TelaInicialADM() {
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const nomelogin = useSelector(state => state.Auth.user.nome)

    function Fdeslogar(){
        dispatch(deslogar());
        navigation.navigate('Login')
    }


 return (
    <SafeAreaView style={Styles.container}>
        <View style={Styles.areaLogo}>
            <Image source={require('../../../static/Logo/LOGOAGENTE.png')} style={{height: 55, width: 140}}  />
        </View>
        <View style={Styles.areaHeader}>
            <Text style={Styles.txtAgente}>Administrador</Text>
            <View style={Styles.areaAgenteExit}>
                <Text style={Styles.txtnomeAgente} numberOfLines={2}>{nomelogin}</Text>
                <Icon name="log-out-outline" size={36} color="#FFF" style={Styles.logoutIcon} onPress={() => Fdeslogar()}/>
            </View>
        </View>
        <View style={Styles.areaAtalhos}>
            <AtalhosIcon/>
        </View>
            <View style={Styles.scrollVisitas}>
                <ScrollView >
                    <CardSelecao nome={'Agentes'} tela={() => navigation.navigate('Agentes')}/>
                    <CardSelecao nome={'Roteiros'}/>
                    <CardSelecao nome={'Checklists'}/>
                </ScrollView>
            </View>
   </SafeAreaView>
  );
}


import React, {useState} from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, FlatList, TextInput, Image, Keyboard} from 'react-native';
import Styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import AtalhosIcon from '../../components/AtalhosIcon';
import Card from '../../components/ScrollVisitas/Card'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

export default function TelaInicial() {
    const navigation = useNavigation()
    const [arrayRoteiro, setarrayRoteiro] = useState([
        {id: 1, nome:"Nome Parceiro1", horario: "16:00", bairro: "Jardim Bla"},
        {id: 2, nome:"Nome Parceiro2", horario: "16:00", bairro: "Jardim Bla"},
        {id: 3, nome:"Nome Parceiro3", horario: "16:00", bairro: "Jardim Bla"},
        {id: 4, nome:"Nome Parceiro4", horario: "16:00", bairro: "Jardim Bla"},
    ])

    moment.locale('pt-br');

    const [isSearching, setIsSearching] = useState(false);

    function btnprocura(){
        setIsSearching(true)
    }

    function btnvoltar(){
        setIsSearching(false)
        Keyboard.dismiss()
    }

 return (
    <SafeAreaView style={Styles.container}>
        <View style={Styles.areaLogo}>
            <Image source={require('../../components/Logos/LOGOAGENTE.png')} style={{height: 55, width: 140}}  />
        </View>
        <View style={isSearching ? { display:'none' } : Styles.areaHeader}>
            <Text style={Styles.txtAgente}>Agente</Text>
            <View style={Styles.areaAgenteExit}>
                <Text style={Styles.txtnomeAgente}>Raul Teixeira</Text>
                <Icon name="log-out-outline" size={36} color="#FFF" style={Styles.logoutIcon} onPress={() => navigation.navigate('Login')}/>
            </View>
        </View>
        <View style={isSearching ? Styles.voltar : { display:'none' }}>
            <TouchableOpacity style={Styles.voltar} onPress={() => btnvoltar()}>
                <Icon name="chevron-back-outline" size={40} color={'#FFF'}/>
                <Text style={Styles.txtvoltar}>Voltar</Text>
            </TouchableOpacity>
        </View>
        <View style={isSearching ? {display: 'none'} : Styles.areaAtalhos}>
            <AtalhosIcon/>
        </View>
        <View style={Styles.areaRoteiro}>
            <Text style={Styles.txtRoteiroHoje}>
                Roteiro de Hoje - Dia {moment().format('L')}
            </Text>

            <View style={isSearching ?  Styles.procura : {display: 'none'}}>
                <TextInput style={isSearching ? Styles.inputs: {display: 'none'}} placeholder="Texto de Pesquisa" placeholderTextColor={'#FFF'}/>
            </View>
            <View style={isSearching ? {display: 'none'} :Styles.view}>
                <TouchableOpacity style={Styles.card} onPress={() => navigation.navigate("ListaParceiro")}>
                    <Icon name="add" style={Styles.addicon} size={30} color={'#000'}/>
                    <Text style={Styles.txtaddvisita}>Nova Visita</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.pesquisa} onPress={() => btnprocura()}>
                    <Icon name="search" size={40} style={Styles.searchIcon} color={'#FFF'}/>
                </TouchableOpacity>
            </View>
        </View>
        {/* <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={Styles.scrollVisitas}> */}
            <View style={Styles.scrollVisitas}>
                <FlatList
                data={arrayRoteiro}
                keyboardDismissMode = {true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={ ({item}) =>
                    <Card data={item} />
                }
                />
            </View>
        {/* </KeyboardAvoidingView> */}
   </SafeAreaView>
  );
}


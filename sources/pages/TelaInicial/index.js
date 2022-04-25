import React, {useState} from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, FlatList, TextInput, Image, Keyboard} from 'react-native';
import Styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import AtalhosIcon from '../../components/AtalhosIcon';
import Card from '../../components/ScrollVisitas/Card'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/pt-br'
import { useSelector, useDispatch } from 'react-redux';
import { deslogar } from '../../store/modules/auth/actions';


export default function TelaInicial() {
    const nomelogin = useSelector(state => state.Auth.user.nome)
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const [arrayRoteiro, setarrayRoteiro] = useState([
        {id: 1, nome:"Nome Parceiro1", horario: "16:00", bairro: "Jardim Bla"},
        {id: 2, nome:"Nome Parceiro2", horario: "16:00", bairro: "Jardim Bla"},
        {id: 3, nome:"Nome Parceiro3", horario: "16:00", bairro: "Jardim Bla"},
        {id: 4, nome:"Nome Parceiro4", horario: "16:00", bairro: "Jardim Bla"},
    ])

    const [arrayRoteiroFiltrado, setArrayRoteiroFiltrado] = useState(arrayRoteiro)

    const [isSearching, setIsSearching] = useState(false);

    function btnprocura(){
        setIsSearching(true)
    }

    function btnvoltar(){
        setIsSearching(false)
        Keyboard.dismiss()
        setArrayRoteiroFiltrado(arrayRoteiro)
    }

    function procuraParceiro(nome){
        const array = []
        arrayRoteiro.forEach(element => {
            if(element.nome.toLowerCase().includes(nome.toLowerCase())){
                array.push(element)
            }
        });
        setArrayRoteiroFiltrado(array)
    }

    function Fdeslogar(){
        dispatch(deslogar());
        navigation.navigate('Login')
    }

 return (
    <SafeAreaView style={Styles.container}>
        <View style={Styles.areaLogo}>
            <Image source={require('../../components/Logos/LOGOAGENTE.png')} style={{height: 55, width: 140}}  />
        </View>
        <View style={isSearching ? { display:'none' } : Styles.areaHeader}>
            <Text style={Styles.txtAgente}>Agente</Text>
            <View style={Styles.areaAgenteExit}>
                <Text style={Styles.txtnomeAgente}>{nomelogin}</Text>
                <Icon name="log-out-outline" size={36} color="#FFF" style={Styles.logoutIcon} onPress={() => Fdeslogar()}/>
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
                <TextInput style={isSearching ? Styles.inputs: {display: 'none'}} placeholder="Texto de Pesquisa" placeholderTextColor={'#FFF'} 
                            onChangeText={procuraParceiro} clearButtonMode='always' />
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
        <View style={Styles.scrollVisitas}>
            <FlatList
            data={arrayRoteiroFiltrado}
            keyboardDismissMode = {true}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={ ({item}) =>
                <Card data={item} />
            }
            />
        </View>
   </SafeAreaView>
  );
}


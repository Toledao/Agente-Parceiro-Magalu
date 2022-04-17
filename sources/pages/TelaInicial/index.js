import React, {useState} from 'react';
import { View, SafeAreaView, Text, Scrollview, TouchableOpacity, FlatList } from 'react-native';
import Styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import AtalhosIcon from '../../components/AtalhosIcon';
import Card from '../../components/ScrollVisitas/Card'
import { useNavigation } from '@react-navigation/native';

export default function TelaInicial() {
    const navigation = useNavigation()
    const [arrayRoteiro, setarrayRoteiro] = useState([
        {id: 1, nome:"Nome Parceiro1", horario: "16:00", bairro: "Jardim Bla"},
        {id: 2, nome:"Nome Parceiro2", horario: "16:00", bairro: "Jardim Bla"},
        {id: 3, nome:"Nome Parceiro3", horario: "16:00", bairro: "Jardim Bla"},
        {id: 4, nome:"Nome Parceiro4", horario: "16:00", bairro: "Jardim Bla"},
    ])

 return (
    <SafeAreaView style={Styles.container}>
        <View style={Styles.areaHeader}>
            <Text style={Styles.txtAgente}>Agente</Text>
            <View style={Styles.areaAgenteExit}>
                <Text style={Styles.txtnomeAgente}>Raul Teixeira</Text>
                <Icon name="log-out-outline" size={36} color="#FFF" style={Styles.logoutIcon} onPress={() => navigation.navigate('Login')}/>
            </View>
        </View>
        <View style={Styles.areaAtalhos}>
                <AtalhosIcon/>
        </View>
        <View style={Styles.areaRoteiro}>
            <Text style={Styles.txtRoteiroHoje}>
                Roteiro de Hoje - Dia 17/04/2022
            </Text>
            <View style={Styles.view}>
                <TouchableOpacity style={Styles.card}>
                    <Icon name="add" style={Styles.addicon} size={30} color={'#000'}/>
                    <Text style={Styles.txtaddvisita}>Nova Visita</Text>
                </TouchableOpacity>
                <Icon name="search" size={40} style={Styles.searchIcon} color={'#FFF'}/>
            </View>
        </View>
        <FlatList
        style={Styles.scrollVisitas}
        data={arrayRoteiro}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) =>
            <Card data={item} />
        }
        />
   </SafeAreaView>
  );
}


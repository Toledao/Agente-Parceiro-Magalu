import React, {useState} from 'react';
import { View, SafeAreaView, Text, FlatList} from 'react-native';
import Styles from './styles';
import { useNavigation } from '@react-navigation/native';
import CardAgentes from '../../../components/Administrativo/CardAgentes';
import AtalhosAgente from '../../../components/Administrativo/AtalhosAgente';

const arrayAgentes = [
    {nomeAgente: 'Marinao Testador', qtdSeller: 150, qtdVisitas: 100},
    {nomeAgente: 'Flavia Fontenelle', qtdSeller: 130, qtdVisitas: 50},
    {nomeAgente: 'Matheus Henrique', qtdSeller: 90, qtdVisitas: 3},
    ]


export default function Agentes() {
    const navigation = useNavigation()

 return (
    <SafeAreaView style={Styles.container}>
        <View style={Styles.areaHeader}>
            <Text style={Styles.txtAgente}>Agentes</Text>
        </View>
        <View style={Styles.areaAtalhos}>
            <AtalhosAgente/>
        </View>
        <FlatList
        style={Styles.scrollVisitas}
        data={arrayAgentes}
        renderItem={({item}) => 
        <CardAgentes data={item}/>
        }
        />
   </SafeAreaView>
  );
}


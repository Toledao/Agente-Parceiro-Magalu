import React from 'react';
import { View, SafeAreaView, Text, FlatList } from 'react-native';
import CardAgenteCheck from '../../../components/Administrativo/CardAgenteCheck';
import Styles from './styles';


const Checklists = [
    {id: 0, nomeCheck: "Checklist #01", data: "2022-05-02 10:27:52"},
    {id: 1, nomeCheck: "Checklist #02", data: "2022-05-02 10:16:37"},
    {id: 2, nomeCheck: "Checklist #03", data: "2022-05-02 10:12:13"},
    {id: 3, nomeCheck: "Checklist #04", data: "2022-05-02 09:16:37"},
    {id: 4, nomeCheck: "Checklist #05", data: "2022-05-02 16:16:37"},
    {id: 5, nomeCheck: "Checklist #06", data: "2022-05-02 08:16:37"},
    {id: 6, nomeCheck: "Checklist #07", data: "2022-05-02 10:16:37"},
]

export default function AgentesListaCheck() {

 return (
   <SafeAreaView style={Styles.container}>
       <View style={Styles.areaTitulo}>
        <View>
            <Text style={Styles.info}>Agente</Text>
            <Text style={Styles.inforesult} numberOfLines={1}>Marcos Quincas</Text>
        </View>
        <View>
            <Text style={Styles.info}>Parceiro</Text>
            <Text style={Styles.inforesult} numberOfLines={1}>Lindorfo Dias Melo</Text>
        </View>
       </View>
       <View style={Styles.areaFlatList}>
        <FlatList
        data={Checklists}
        renderItem={({item}) =>
        <CardAgenteCheck data={item}/>
        }
        />
       </View>
   </SafeAreaView>
  );
}
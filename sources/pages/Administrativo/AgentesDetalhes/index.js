import React from 'react';
import { View, SafeAreaView, Text, FlatList, TouchableOpacity } from 'react-native';
import CardAgentesDetalhes from '../../../components/Administrativo/CardAgenteDetalhes';
import Styles from './styles';

export default function AgentesDetalhes() {

  const componentDetalhes = [
    { id: 1, nomeDetalhe: "Carteira Sellers", desc1: "Quantidade de Sellers", resp1: 50, desc2: "", resp2: ""},
    { id: 2, nomeDetalhe: "Checklists", desc1: "Quantidade de Visitas", resp1: 100, desc2: "", resp2: ""},
    { id: 3, nomeDetalhe: "Roteiros", desc1: "Quantidade Concluídos", resp1: 150, desc2: "Próximas Visitas", resp2: 15},
  ]

 return (
   <SafeAreaView style={Styles.container}>
     <View style={Styles.areaTitulo}>
        <Text style={Styles.txtAgente}>Agente</Text>
        <Text style={Styles.resulttxtAgente} numberOfLines={1}>Marcos Quincas da Silva</Text>
      </View>
      <View style={Styles.areaDetalhes}>
        <FlatList
        data={componentDetalhes}
        renderItem={({item}) => 
          <CardAgentesDetalhes data={item} />
        }
        ListFooterComponent={
          <View style={Styles.AreaBTN}>
            <TouchableOpacity style={Styles.btnCadastrar}>
              <Text style={Styles.txtBTN}>Editar Agente</Text>
            </TouchableOpacity>
          </View>
        }
        />
      </View>
   </SafeAreaView>
  );
}
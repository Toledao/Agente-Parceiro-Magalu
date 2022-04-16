import React from 'react';
import { View, SafeAreaView, Text, Scrollview } from 'react-native';
import Styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'
import AtalhosIcon from '../../components/AtalhosIcon';

export default function TelaInicial() {
 return (
   <SafeAreaView style={Styles.container}>
       <View style={Styles.areaHeader}>
           <Text style={Styles.txtAgente}>Agente</Text>
           <View style={Styles.areaAgenteExit}>
               <Text style={Styles.txtnomeAgente}>Raul Teixeira</Text>
               <Icon name="log-out-outline" size={36} color="#FFF" style={Styles.logoutIcon} />
           </View>
       </View>

       <View style={Styles.areaAtalhos}>
            <AtalhosIcon/>
       </View>
       <View style={Styles.areaRoteiro}>
           <Text>Roteiro de Visita</Text>
       </View>
       <View style={Styles.scrollVisitas}>
            <Text>SCROLL VISITAS</Text>
       </View>
   </SafeAreaView>
  );
}


import React, {Fragment} from 'react';
import { View, SafeAreaView, Text, ScrollView, } from 'react-native';
import Styles from './styles';
export default function CheckList() {
 return (
   <Fragment>
     
     <SafeAreaView style={Styles.container}>
          <View style={Styles.areaHeader}>
               <View style={Styles.areaParData}>
                    <Text style={Styles.txtTitulos}>Parceiro</Text>
                    <Text style={Styles.txtParData} numberOfLines={2}>José Rocken Siderson</Text>
                    <Text style={Styles.txtTitulos}>Data da primeira visita</Text>
                    <Text style={Styles.txtParData}>10/04/2022</Text>
               </View>
          </View>
          <View style={Styles.areaCheckList}>
               <ScrollView style={Styles.areaScroll}>
                    <View>
                         <Text>TESTE</Text>
                    </View>
               </ScrollView>
          </View>
     </SafeAreaView>
     <SafeAreaView style={{flex: 0, backgroundColor: '#FFF'}}/> 
   </Fragment>
  );
}

// Utilização do SafeAreaView em baixo para manter a cor do scroll se não ia ficar azul
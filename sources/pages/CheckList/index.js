import React, {Fragment, useState} from 'react';
import { View, SafeAreaView, Text, ScrollView, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Styles from './styles';
import SelectMultiple from 'react-native-select-multiple'

export default function CheckList() {


     const perguntas = [
     {pergunta: 'Qual a preferência de contato do seller? *', 
     respostas: ['Email', 'WhatsApp', 'Telefone', 'Videoconferência', 'Visita', 'Outro'],
     uniqueSelect: true,
     type: 'checklist'},

     {pergunta: 'Quais redes sociais ativas a loja possui? * (Redes que a loja da manutenção)', 
     respostas: ['Instagram', 'Facebook', 'TikTok', 'Twitter', 'Pinterest', 'Não possui rede social', 'Outros'],
     uniqueSelect: false,
     type: 'checklist'},

     {pergunta: 'Quais os outros canais de venda online? *', 
     respostas: ['Site próprio', 'Mercado Livre', 'B2W (Americanas)', 'Shopee', 'Via (Casas Bahia)', 'Amazon', 'Outros'],
     uniqueSelect: false,
     type: 'checklist'},
     
     {pergunta: 'Quantos SKUs compõem o catálogo do seller? *', 
     respostas: ['0 a 10', '11 a 20', '21 a 50', '51 a 100', 'acima de 100'],
     uniqueSelect: false,
     type: 'checklist'},
     
     {pergunta: 'O seller possui um ERP ou HUB? *',
     respostas: ['Bling', 'Tray', 'Tiny', 'Vtex', 'Outro'],
     uniqueSelect: false,
     type: 'checklist'},
    
     {pergunta: 'O seller possui algum tipo de logística/entrega própria? *', 
     respostas: ['Não possui', 'Motoboy', 'Transportadora', 'Entrega própria', 'Outro'],
     uniqueSelect: false,
     type: 'checklist'},

     {pergunta: 'Qual a sua percepção geral sobre o seller? *',
     respostas: [],
     uniqueSelect: false,
     type: 'input'},

     {pergunta: 'Imagens da Loja (se tiver)',
     respostas: [],
     uniqueSelect: false,
     type: 'uploadImage'}

]
     
     const [opcoesCheck, setopcoesCheck] = useState([])
     const [uniqueCheck, setuniqueCheck] = useState([])
     

     function marcarCheckList(opcao, item){
          if(item.uniqueSelect){
               setuniqueCheck(opcao)
               console.log('entrou IF')
          }
          else{
               setopcoesCheck(opcao)
               console.log('entrou else')
          }

     }

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
          <FlatList
          data={perguntas}
          style={Styles.areaCheckList}
          renderItem={({item}) =>
               <View style={Styles.viewQuestions}>
                    <Text style={Styles.txtPerguntas}>{item.pergunta}</Text>
                    {item.type == 'input' ? 
                    (
                         <TextInput
                         style={Styles.inputOutros}
                         placeholder="Qual o outro ERP que ele(a) possui?"
                         />
                    )
                    :
                    item.type == 'uploadImage' ?
                    
                         <Text>UPLOAD DE IMAGEM</Text>
                    
                    :
                    
                    item.uniqueSelect ?
                    (                      
                         <SelectMultiple
                         items={item.respostas}
                         selectedItems={uniqueCheck}
                         onSelectionsChange={(opcao) => marcarCheckList(opcao, item)}
                         maxSelect={1}
                         />
                    )
                    :
                    (
                         <SelectMultiple
                         items={item.respostas}
                         selectedItems={opcoesCheck}
                         onSelectionsChange={(opcao) => marcarCheckList(opcao, item)}
                         />
                    )
                    }

               </View>
          }
          />
          <View style={Styles.AreaBTN}>
               <TouchableOpacity style={Styles.btnCheckList}>
               <Text style={Styles.txtCheckList}>Finalizar CheckList</Text>
               </TouchableOpacity>
          </View>
     </SafeAreaView>

   </Fragment>
  );
}

// Utilização do SafeAreaView em baixo para manter a cor do scroll se não ia ficar azul

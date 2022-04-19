import React, {useState} from 'react';
import { View, Text, TextInput, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import ScrollParceiros from '../../components/ScrollParceiros';
import Styles from './style';

export default function ListaParceiro() {

const [arrayParceiros, setarrayParceiros] = useState([
    {id: 1, nomeParceiro: 'TESTE 1'},
    {id: 2, nomeParceiro: 'TESTE 2'},
    {id: 3, nomeParceiro: 'TESTE 3'},
    {id: 4, nomeParceiro: 'TESTE 4'},
])

 return (
   <View style={Styles.container}>
       <View style={Styles.areaselecioneParceiro}>
            <Text style={Styles.txtParceiro}>Selecione o parceiro</Text>
       </View>
       <View style={Styles.scrollParceiros}>
            <View style={Styles.areaInput}>
                <TextInput
                placeholder='Pesquisar parceiro'
                style={Styles.inputPesquisa}
                />
                <Icon name='search-outline' size={40} color="#0086FE" />
            </View>
            <FlatList
            style={Styles.scrollVisitas}
            data={arrayParceiros}
            keyExtractor={(item) => item.id}
            renderItem={ ({item}) =>
            <ScrollParceiros data={item} />
            }
            />
       </View>
   </View>
  );
}
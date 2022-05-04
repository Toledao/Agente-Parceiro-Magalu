import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import ScrollParceiros from '../../components/ScrollParceiros';
import Styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import * as ParceiroAction from '../../store/modules/parceiros/actions';
import Loading from '../../components/Loading';

export default function ListaParceiro() {

    const carregado = useSelector(state => state.Roteiro.carregado)
    const agenteId = useSelector(state => state.Auth.user.id)
    const token = useSelector(state => state.Auth.user.token)
    const isloading = useSelector(state => state.Roteiro.isloading)
    const erro = useSelector(state => state.Roteiro.erro)
    const done = useSelector(state => state.Roteiro.done)
    const dispatch = useDispatch()
    const arrayParceiro = useSelector(state => state.Roteiro.roteiro)

    useEffect(()=>{
        if(!carregado){
            if(done){
                if(erro){
                    console.warn("deu erro")
                }else{
                    dispatch(ParceiroAction.ParceiroCarregarRequest({agenteId,token}))
                }
            }
        }
    })


    const [arrayParceiros, setarrayParceiros] = useState([
        {id: 1, nomeParceiro: 'TESTE 1'},
        {id: 2, nomeParceiro: 'TESTE 2'},
        {id: 3, nomeParceiro: 'TESTE 3'},
        {id: 4, nomeParceiro: 'TESTE 4'},
    ])


 return (
   <View style={Styles.container}>
       <Loading isLoading={isloading}/>
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
            data={arrayParceiro}
            keyExtractor={(item) => item.id}
            renderItem={ ({item}) =>
            <ScrollParceiros data={item} />
            }
            />
       </View>
   </View>
  );
}
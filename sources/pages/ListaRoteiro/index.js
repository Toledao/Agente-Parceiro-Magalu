import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Card from '../../components/ScrollVisitas/Card';
import Styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import * as RoteiroAction from '../../store/modules/roteiros/actions';
import Loading from '../../components/Loading';

export default function ListaRoteiro() {
    const carregado = useSelector(state => state.Roteiro.carregado)

    const isloading = useSelector(state => state.Roteiro.isloading)
    const erro = useSelector(state => state.Roteiro.erro)
    const done = useSelector(state => state.Roteiro.done)
    const dispatch = useDispatch()
    const arrayRoteiro = useSelector(state => state.Roteiro.roteiro)

    useEffect(()=>{
        if(!carregado){
            if(done){
                if(erro){
                    console.warn("deu erro")
                }else{
                    dispatch(RoteiroAction.RoteiroCarregarRequest())
                }
            }
        }
    })

    return (
        <View style={Styles.container}>
            <Loading isLoading={isloading}/>
            <View style={Styles.areaselecioneParceiro}>
                    <Text style={Styles.txtParceiro}>Lista de Visitas</Text>
            </View>
            <View style={Styles.scrollVisitas}>
                <View style={Styles.menuOpcoes}>
                    <View>
                        <Icon name="download-outline" size={45} color="#0086FE" style={Styles.IconExport}/>
                    </View>
                    <View style={Styles.areaInput}>
                        <TextInput
                        placeholder='Pesquisar parceiro'
                        style={Styles.inputPesquisa}
                        />
                    </View>
                </View>
                <View style={Styles.ListaRoteiro}>
                    <FlatList
                    data={arrayRoteiro}
                    keyboardDismissMode = {true}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={ ({item}) =>
                        <Card data={item} listagem={true} />
                    }
                    />
                </View>
            </View>
        </View>
    );
}
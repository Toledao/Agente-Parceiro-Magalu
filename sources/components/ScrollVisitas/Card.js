import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/pt-br'

export default function ScrollVisitas({data, listagem = false}) {
    const navigation = useNavigation()

    var Nome = data.nomeparceiro
    var Bairro = data.bairro
    var Horario = data.horario
    var Data = data.dia

    return (
        <TouchableOpacity style={Styles.card}>  
              {/*Talvez eu troque o TouchanleOpacity, ja q ele é meio Meh.. */}
            <Text style={Styles.txtParceiro} numberOfLines={1}>{Nome}</Text>

            <View style={Styles.descricao}>
                <View style={Styles.areaInfos}>
                 <Text style={Styles.txtdesc} numberOfLines={2}>Bairro: {Bairro}</Text>
                </View>
                <View style={Styles.areaInfos}>
                    <Text style={listagem == true ? Styles.txtdesc : {display: "none"}}>Dia: {moment(Data).format('L')}</Text>
                    <Text style={Styles.txtdesc}>Horario: {Horario}</Text>
                </View>
            </View>

            <View style={Styles.icons}>
                <Icon name="create-outline" size={35} style={Styles.icon} onPress={() => navigation.navigate('Login')}/>
                <Icon name="list" size={35} style={Styles.icon} onPress={() => navigation.navigate('CheckList')}/>
                <Icon name="information-circle-outline" size={35} style={Styles.icon} onPress={() => navigation.navigate('Detalhes')}/>
                {/* Botei para voltar ao Login, dps trocar para a tela especifico */}
            </View>
        </TouchableOpacity>
  );
}

const Styles = EStyleSheet.create({
    card:{
        backgroundColor: "#FFF",
        borderRadius: 20,
        padding: 10,
        marginVertical: '0.3rem',
        marginHorizontal: '1rem'
    },
    descricao:{
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 5
    },
    txtParceiro:{
        color: 'black',
        fontWeight: '400',
        fontSize: '1.2rem',
        alignSelf: 'center'
    },
    txtdesc:{
        color: 'black',
        fontSize: '0.8rem',
    },
    icons:{
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 5
    },
    icon:{
        color:'$background'
    },
    areaInfos:{
        width: '73%'
    }
})
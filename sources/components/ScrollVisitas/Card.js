import React from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

export default function ScrollVisitas(param) {
    const navigation = useNavigation()

    var Nome = param.nome
    var Bairro = param.bairro
    var Horario = param.horario

    return (
        <TouchableOpacity style={Styles.card}>  
              {/*Talvez eu troque o TouchanleOpacity, ja q ele é meio Meh.. */}
            <Text style={Styles.txtParceiro}>{Nome}</Text>

            <View style={Styles.descricao}>
                <Text style={Styles.txtdesc}>Bairro: {Bairro}</Text>
                <Text style={Styles.txtdesc}>Horario: {Horario}</Text>
            </View>

            <View style={Styles.icons}>
                <Icon name="information-circle-outline" size={60} style={Styles.icon} onPress={() => navigation.navigate('Login')}/>
                <Icon name="list" size={60} style={Styles.icon} onPress={() => navigation.navigate('Login')}/>
                <Icon name="create" size={60} style={Styles.icon} onPress={() => navigation.navigate('Login')}/>
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
        marginHorizontal: '5%'
    },
    descricao:{
        height: '3rem',
        flexWrap: 'wrap',
        alignContent: "space-between",
        padding: 5
    },
    txtParceiro:{
        color: 'black',
        fontSize: 30,
        alignSelf: 'center'
    },
    txtdesc:{
        color: 'black',
        fontSize: 18,
    },
    icons:{
        height: '4rem',
        flexWrap: 'wrap',
        alignContent: "space-between",
        paddingHorizontal: 5
    },
    icon:{
        color:'$background'
    }
})
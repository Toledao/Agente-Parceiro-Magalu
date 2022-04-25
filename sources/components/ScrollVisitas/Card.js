import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

export default function ScrollVisitas({data}) {
    const navigation = useNavigation()

    var Nome = data.nome
    var Bairro = data.bairro
    var Horario = data.horario

    return (
        <TouchableOpacity style={Styles.card}>  
              {/*Talvez eu troque o TouchanleOpacity, ja q ele é meio Meh.. */}
            <Text style={Styles.txtParceiro}>{Nome}</Text>

            <View style={Styles.descricao}>
                <Text style={Styles.txtdesc}>Bairro: {Bairro}</Text>
                <Text style={Styles.txtdesc}>Horario: {Horario}</Text>
            </View>

            <View style={Styles.icons}>
                <Icon name="create-outline" size={35} style={Styles.icon} onPress={() => navigation.navigate('Login')}/>
                <Icon name="list" size={35} style={Styles.icon} onPress={() => navigation.navigate('CheckList')}/>
                <Icon name="information-circle-outline" size={35} style={Styles.icon} onPress={() => navigation.navigate('Login')}/>
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
    }
})
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

export default function Atalho({nomeatalho, icone, navigate}) {

    const nomeAtalho = nomeatalho


    const navigation = useNavigation()
    const navegação = navigate

    const icon = icone
    return (
        <TouchableOpacity style={Styles.atalho} onPress={() => navigation.navigate(navegação)}>  
            {/* Botei para voltar ao Login, dps trocar para a tela especifico */}
            <View style={Styles.areaIMG} >
                <Icon name={icon} size={40}/>
            </View>
            <Text style={Styles.txtAtalho}>{nomeAtalho}</Text>
        </TouchableOpacity>
    );
}

const Styles = EStyleSheet.create({
    atalho:{
        paddingHorizontal: '0.8rem'
    },
    areaIMG:{
        width: "4rem",
        height: "4rem",
        backgroundColor: "#FFF",
        borderRadius: "2.5rem",
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtAtalho:{
        color: "$txtcolor",
        width: "4rem",
        textAlign: 'center',
        marginTop: '0.3rem',
    }
})
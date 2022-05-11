import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import EStyleSheet from 'react-native-extended-stylesheet';
import { useNavigation } from '@react-navigation/native';


export default function ScrollParceiros({data}) {
    const navigation = useNavigation()

    const dados = { ...data}

 return (
    <TouchableOpacity onPressOut={() => navigation.navigate("NewVisitaDate")}>
        <View style={Styles.container}>
            <Text style={Styles.txtNome}>{dados.nome}</Text>
            <Icon style={Styles.icone} size={32} name='chevron-forward-outline' color="#0086FE" />
        </View>
    </TouchableOpacity>
  );
}

const Styles = EStyleSheet.create({
    container:{
        flex: 1,
        backgroundColor : '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: "1rem",
        paddingVertical: '0.8rem',
        marginBottom: '1rem',
    },
    txtNome:{
        fontSize: '1.4rem',
        
        marginLeft: '2rem'
    },
    icone:{
        marginLeft: '10rem',
        marginRight: '2rem'
    }
})
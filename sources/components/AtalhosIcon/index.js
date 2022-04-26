import React from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Atalho from '../Atalho';

export default function AtalhosIcon() {

 return (
    <ScrollView style={Styles.areaAtalho} horizontal={true} showsHorizontalScrollIndicator={false} >
        <Atalho icone='list' navigate='Descricao' nomeatalho="Checklist Avulso" />
        <Atalho icone='list' navigate='Descricao' nomeatalho="Checklist Avulso" />
        <Atalho icone='list' navigate='Descricao' nomeatalho="Checklist Avulso" />
        <Atalho icone='list' navigate='Descricao' nomeatalho="Checklist Avulso" />
        <Atalho icone='list' navigate='Descricao' nomeatalho="Checklist Avulso" />
        <Atalho icone='list' navigate='Descricao' nomeatalho="Checklist Avulso" />
        <Atalho icone='list' navigate='Descricao' nomeatalho="Checklist Avulso" />
        <Atalho icone='list' navigate='Descricao' nomeatalho="Checklist Avulso" />
        
        
    </ScrollView>
    
  );
}

const Styles = EStyleSheet.create({
    areaAtalho:{
        width: "100%",
        height: "5rem",
        flexDirection:'row'
    },
    atalho:{
        paddingHorizontal: '1rem'
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
        marginTop: '0.3rem'
    }
})
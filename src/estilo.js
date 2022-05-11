import React from 'react'
import {StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    background:{
        backgroundColor: '#0086FE',
        height: '100%',
    },
    corBranco:{
        color: '#FFF'
    },
    negrito:{
        fontWeight: 'bold'
    },
    input:{
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFF',
    },
    login:{
        width: Dimensions.get("window").width / 1.2,
        alignSelf: 'center',
        paddingLeft: 20,
        margin: 20,
    },
    centralizar:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao:{
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoLogin:{
        backgroundColor: '#58C22E',
        width: Dimensions.get("window").width / 1.5,
        height: Dimensions.get("window").height / 14
        
    }

});
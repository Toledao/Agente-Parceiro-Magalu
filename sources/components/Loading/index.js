import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function Loading({isLoading}) {
    if (!isLoading){
       return <></>
    }else{
        return (
            <View style={Styles.container}>
                <View style={Styles.card}>
                    <Text styles={Styles.texto}>Carregando..</Text>
                </View>
            </View>
        );
    }
}


const Styles = EStyleSheet.create({
    container:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    card:{
        backgroundColor: "#FFF",
        borderRadius: 20,
        padding: 10,
        marginVertical: '0.3rem',
        marginHorizontal: '1rem',
        alignItems: 'center'
    },
    texto:{
        color: '#000',
        fontSize: '1.5rem',
    }
})

Loading.defaultProps = {
    isLoading: false
}




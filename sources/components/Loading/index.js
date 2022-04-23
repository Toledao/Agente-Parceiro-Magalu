import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function Loading({isLoading}) {
    if (!isLoading){
       return <></>
    }else{
        return (
            <View style={Styles.container}>
                <View style={Styles.card}>
                    <ActivityIndicator size={'large'} color={'#0086FE'}/>
                    {/* <Text style={Styles.texto}>Carregando..</Text> */}
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
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    card:{
        // backgroundColor: "#FFF",
        alignItems: 'center'
    },
    texto:{
        color: 'black',
        fontWeight: '400',
        fontSize: '1.2rem',
        alignSelf: 'center',
    }
})

Loading.defaultProps = {
    isLoading: false
}




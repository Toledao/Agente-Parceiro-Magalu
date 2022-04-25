import React from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

export default function AtalhosAgente() {
    const navigation = useNavigation()
 return (
    <ScrollView style={Styles.areaAtalho} horizontal={true} showsHorizontalScrollIndicator={false} >

        {/* Atalho 1 */}

        <TouchableOpacity style={Styles.atalho} onPress={() => navigation.navigate('Detalhes')}>  
            {/* Botei para voltar ao Login, dps trocar para a tela especifico */}
            <View style={Styles.areaIMG} >
                <Icon name="person-add-outline" size={40} color={"#0086FE"}/>
                <Text style={Styles.txtAtalho}> Novo Agente </Text>
            </View>
        </TouchableOpacity>

        {/* Atalho 2 */}

        <TouchableOpacity style={Styles.atalho} onPress={() => navigation.navigate('Login')}>  
            {/* Botei para voltar ao Login, dps trocar para a tela especifico */}
            <View style={Styles.areaIMG} >
                <Icon name="download-outline" size={40} color={"#0086FE"}/>
                <Text style={Styles.txtAtalho}> Importar </Text>
            </View>
        </TouchableOpacity>
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
        width: "6rem",
        height: "5rem",
        backgroundColor: "#FFF",
        borderRadius: "0.7rem",
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtAtalho:{
        color: "#000",
        textAlign: 'center',
        marginTop: '0.3rem'
    }
})
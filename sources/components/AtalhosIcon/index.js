import React from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

export default function AtalhosIcon() {
    const navigation = useNavigation()
 return (
    <ScrollView style={Styles.areaAtalho} horizontal={true} showsHorizontalScrollIndicator={false} >

        {/* Atalho 1 */}

        <TouchableOpacity style={Styles.atalho} onPress={() => navigation.navigate('Detalhes')}>  
            {/* Botei para voltar ao Login, dps trocar para a tela especifico */}
            <View style={Styles.areaIMG} >
                <Icon name="list" size={60}/>
            </View>
            <Text style={Styles.txtAtalho}> Checklist Avulso </Text>
        </TouchableOpacity>

        {/* Atalho 2 */}

        <TouchableOpacity style={Styles.atalho} onPress={() => navigation.navigate('Login')}>  
            {/* Botei para voltar ao Login, dps trocar para a tela especifico */}
            <View style={Styles.areaIMG} >
                <Icon name="beer-outline" size={60}/>
            </View>
            <Text style={Styles.txtAtalho}> Checklist Avulso 2 </Text>
        </TouchableOpacity>

        {/* Atalho 3 */}

        <TouchableOpacity style={Styles.atalho} onPress={() => navigation.navigate('Login')}>  
            {/* Botei para voltar ao Login, dps trocar para a tela especifico */}
            <View style={Styles.areaIMG} >
                <Icon name="beer-outline" size={60}/>
            </View>
            <Text style={Styles.txtAtalho}> Checklist Avulso 3 </Text>
        </TouchableOpacity>

        {/* Atalho 4 */}

        <TouchableOpacity style={Styles.atalho} onPress={() => navigation.navigate('Login')}>  
            {/* Botei para voltar ao Login, dps trocar para a tela especifico */}
            <View style={Styles.areaIMG} >
                <Icon name="beer-outline" size={60}/>
            </View>
            <Text style={Styles.txtAtalho}> Checklist Avulso 4</Text>
        </TouchableOpacity>

        {/* Atalho 5 */}

        <TouchableOpacity style={Styles.atalho} onPress={() => navigation.navigate('Login')}>  
            {/* Botei para voltar ao Login, dps trocar para a tela especifico */}
            <View style={Styles.areaIMG} >
                <Icon name="beer-outline" size={60}/>
            </View>
            <Text style={Styles.txtAtalho}> Checklist Avulso 5</Text>
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
        width: "5rem",
        height: "5rem",
        backgroundColor: "#FFF",
        borderRadius: "2.5rem",
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtAtalho:{
        color: "$txtcolor",
        width: "5rem",
        textAlign: 'center',
        marginTop: '0.4rem'
    }
})
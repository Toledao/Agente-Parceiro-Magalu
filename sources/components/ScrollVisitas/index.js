import React from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

export default function ScrollVisitas() {
    const navigation = useNavigation()
    return (
    <ScrollView style={Styles.area}>

        {/* Atalho 1 */}

        <TouchableOpacity style={Styles.card}>  
            
            <Text style={Styles.txtParceiro}>Nome Parceiro</Text>

            <View style={Styles.descricao}>
                <Text style={Styles.txtdesc}>Bairro: Jardim Bla</Text>
                <Text style={Styles.txtdesc}>Horario: 16:00</Text>
            </View>

            <View style={Styles.icons}>
                <Icon name="information-circle-outline" size={60} style={Styles.icon} onPress={() => navigation.navigate('Login')}/>
                <Icon name="list" size={60} style={Styles.icon} onPress={() => navigation.navigate('Login')}/>
                <Icon name="create" size={60} style={Styles.icon} onPress={() => navigation.navigate('Login')}/>
                {/* Botei para voltar ao Login, dps trocar para a tela especifico */}
            </View>
        </TouchableOpacity>

        {/* Atalho 2 */}

        <TouchableOpacity style={Styles.card}>  
            
            <Text style={Styles.txtParceiro}>Nome Parceiro</Text>

            <View style={Styles.descricao}>
                <Text style={Styles.txtdesc}>Bairro: Jardim Bla</Text>
                <Text style={Styles.txtdesc}>Horario: 16:00</Text>
            </View>

            <View style={Styles.icons}>
                <Icon name="information-circle-outline" size={60} style={Styles.icon} onPress={() => navigation.navigate('Login')}/>
                <Icon name="list" size={60} style={Styles.icon} onPress={() => navigation.navigate('Login')}/>
                <Icon name="create" size={60} style={Styles.icon} onPress={() => navigation.navigate('Login')}/>
                {/* Botei para voltar ao Login, dps trocar para a tela especifico */}
            </View>
        </TouchableOpacity>

        {/* Atalho 3 */}

        <TouchableOpacity style={Styles.card}>  
            
            <Text style={Styles.txtParceiro}>Nome Parceiro</Text>

            <View style={Styles.descricao}>
                <Text style={Styles.txtdesc}>Bairro: Jardim Bla</Text>
                <Text style={Styles.txtdesc}>Horario: 16:00</Text>
            </View>

            <View style={Styles.icons}>
                <Icon name="information-circle-outline" size={60} style={Styles.icon} onPress={() => navigation.navigate('Login')}/>
                <Icon name="list" size={60} style={Styles.icon} onPress={() => navigation.navigate('Login')}/>
                <Icon name="create" size={60} style={Styles.icon} onPress={() => navigation.navigate('Login')}/>
                {/* Botei para voltar ao Login, dps trocar para a tela especifico */}
            </View>
        </TouchableOpacity>

        {/* Atalho 4 */}

        <TouchableOpacity style={Styles.card}>  
            
            <Text style={Styles.txtParceiro}>Nome Parceiro</Text>

            <View style={Styles.descricao}>
                <Text style={Styles.txtdesc}>Bairro: Jardim Bla</Text>
                <Text style={Styles.txtdesc}>Horario: 16:00</Text>
            </View>

            <View style={Styles.icons}>
                <Icon name="information-circle-outline" size={60} style={Styles.icon} onPress={() => navigation.navigate('Login')}/>
                <Icon name="list" size={60} style={Styles.icon} onPress={() => navigation.navigate('Login')}/>
                <Icon name="create" size={60} style={Styles.icon} onPress={() => navigation.navigate('Login')}/>
                {/* Botei para voltar ao Login, dps trocar para a tela especifico */}
            </View>
        </TouchableOpacity>


    </ScrollView>
    
  );
}

const Styles = EStyleSheet.create({
    area:{
        
    },
    card:{
        width: '23rem',
        alignSelf: "center",
        backgroundColor: "#FFF",
        borderRadius: 20,
        padding: 10,
        marginVertical: '0.3rem'
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
import React from 'react';
import { View, SafeAreaView, Text, Scrollview, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';


export default function RoteiroVisitas() {
    const navigation = useNavigation()
 return (
    <View style={Styles.view}>
        <TouchableOpacity style={Styles.card}>
            <Icon name="add" style={Styles.addicon} size={34} color={'#000'}/>
            <Text style={Styles.txtaddvisita}>Nova Visita</Text>
        </TouchableOpacity>
        <Icon name="search" size={46} style={Styles.searchIcon} color={'#FFF'}/>
    </View>
  );
}

const Styles = EStyleSheet.create({
    card:{
        width: '70%',
        backgroundColor: "#FFF",
        borderRadius: 6,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    view:{
        flexDirection: 'row',
        marginBottom: '0.3rem',
        width: '100%',
        marginHorizontal: '5%'
    },
    addicon:{
        width: '25%',
        textAlign: 'center'
    },
    txtaddvisita:{
        width: '75%',
        textAlign: 'center',
        color: 'black',
        fontSize: '1.2rem'
    },
    searchIcon:{
        alignSelf: 'center',
        width: '20%',
        textAlign: 'right',
        padding: '1%'
    }
})

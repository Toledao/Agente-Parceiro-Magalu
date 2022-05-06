import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import EStyleSheet from 'react-native-extended-stylesheet';
import { useNavigation } from '@react-navigation/native';

export default function CardAgenteCheck({data}) {

    const navigation = useNavigation();

 return (
    <TouchableOpacity style={Styles.container}>
        <View style={Styles.areaNomebtn}>
            <Text style={Styles.txtNome} numberOfLines={1}>{data.nomeCheck}</Text>
            <Icon style={Styles.icone} size={32} name='chevron-forward-outline' color="#0086FE" />
        </View>
        <View style={Styles.areaQtd}>
            <View>
                <Text style={Styles.txtinfo}>Data e Hora</Text>
                <Text style={Styles.txtinforesp}>{data.data}</Text>
            </View>
        </View>
    </TouchableOpacity>
  );
}

const Styles = EStyleSheet.create({
    container:{
        flex: 1,
        backgroundColor : '#FFF',
        borderRadius: "1rem",
        paddingVertical: '0.8rem',
        marginVertical: '0.8rem'
    },
    txtNome:{
        fontSize: '1.4rem',
        marginLeft: '2rem',
        width: '65%'
    },
    icone:{
        marginRight: '2rem',
        marginLeft: '1rem'
    },
    areaQtd:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '1.8rem'
    },
    txtinfo:{
        fontSize: '0.9rem',
        textAlign: 'center',
        width: "100%"
    },
    areaNomebtn:{
        flexDirection: 'row',
        marginBottom: '1rem'
    },
    txtinforesp:{
        fontSize: '0.9rem',
        textAlign: 'center',
        fontWeight: '500'
    }
})
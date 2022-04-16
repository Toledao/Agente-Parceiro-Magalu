import React from 'react';
import { View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons'

export default function AtalhosIcon() {
 return (
    <View style={Styles.areaAtalho}>
        <View style={Styles.areaIMG}>
            <Icon name="beer-outline" size={60}/>
        </View>
        <Text style={Styles.txtAtalho}> Checklist Avulso </Text>
    </View>
    
  );
}

const Styles = EStyleSheet.create({
    areaAtalho:{
        width: "5rem",
        height: "5rem"
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
        textAlign: 'center',
        marginTop: '0.4rem'
    }
})
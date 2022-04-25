import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:{
        backgroundColor: '$background', // Variável global
        flex: 1,
    },
    areaHeader:{
        flex: 2,
        marginHorizontal: "1.5rem",
        alignItems: 'center',
        paddingTop: '1%'
    },
    areaAtalhos:{
        flex: 4,
    },
    scrollVisitas:{
        flex: 13,
        paddingHorizontal: '5%'
    },
    txtAgente:{
        color: "$txtcolor",
        fontSize: 26,
        fontWeight: 'bold'
    },
    txtnomeAgente:{
        color: "$txtcolor",
        fontSize: 28,
        fontWeight: 'bold',
        flex: 8
    },
    areaAgenteExit:{
        flexDirection: 'row',
        marginTop: "1%",
    },
    logoutIcon:{
        flex: 1,
    }

    

})
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:{
        backgroundColor: '$background', // Variável global
        flex: 1,
    },
    areaLogo:{
        flex: 0.1,
        alignItems: 'center',
        marginBottom: '10%'
    },
    areaHeader:{
        flex: 0.26,
        marginHorizontal: "1.5rem"
    },
    areaAtalhos:{
        flex: 0.3,
    },
    scrollVisitas:{
        flex: 0.5,
        paddingHorizontal: '5%'
    },
    txtAgente:{
        color: "$txtcolor",
        fontSize: 20,
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
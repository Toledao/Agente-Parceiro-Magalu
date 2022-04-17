import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:{
        backgroundColor: '$background', // Variável global
        flex: 1,
    },
    areaHeader:{
        flex: 0.8,
        marginHorizontal: "1.5rem"
    },
    areaAtalhos:{
        flex: 1.4,
        // backgroundColor: "$background",
        paddingVertical: '0.8rem',
        paddingHorizontal: '0.8rem'
    },
    areaRoteiro:{
        flex: 1,
        // backgroundColor: "#324"
    },
    scrollVisitas:{
        flex: 4,
        // backgroundColor: "#384"
    },
    txtAgente:{
        color: "$txtcolor",
        fontSize: 20,
    },
    txtnomeAgente:{
        color: "$txtcolor",
        fontSize: 28,
        fontWeight: 'bold',
        flex: 5.4
    },
    areaAgenteExit:{
        flexDirection: 'row',
        marginTop: "1%"
    },
    logoutIcon:{
        flex: 1,
    }

    

})
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:{
        backgroundColor: '$background', // Variável global
        flex: 1,
    },
    areaHeader:{
        flex: 0.3,
        marginHorizontal: "1.5rem"
    },
    areaAtalhos:{
        flex: 0.35,
        paddingVertical: '0.8rem',
        // paddingHorizontal: '0.8rem'
    },
    areaRoteiro:{
        flex: 0.35,
    },
    scrollVisitas:{
        flex: 1,
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
    },
    card:{
        width: '17rem',
        backgroundColor: "#FFF",
        borderRadius: 6,
        padding: "0.2rem",
        flexDirection: 'row',
        alignItems: 'center',
    },
    view:{
        flexDirection: 'row',
        marginBottom: '0.3rem',
        marginHorizontal: '1rem'
    },
    addicon:{
        width: '25%',
        textAlign: 'center'
    },
    txtaddvisita:{
        width: '75%',
        textAlign: 'center',
        color: 'black',
        fontSize: '1rem'
    },
    searchIcon:{
        alignSelf: 'center',
        width: '25%',
        textAlign: 'center',
        padding: '1%'
    },
    txtRoteiroHoje:{
        color: '$txtcolor',
        textAlign: 'center',
        fontSize: '1.3rem',
        marginBottom: '0.6rem'
    }

    

})
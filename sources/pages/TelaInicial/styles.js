import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:{
        backgroundColor: '$background', // Variável global
        flex: 1,
    },
    areaLogo:{
        flex: 1,
        alignItems: 'center'
    },
    areaHeader:{
        flex: 4,
        marginHorizontal: "1.5rem"
    },
    areaAtalhos:{
        flex: 6,
        // paddingVertical: '0.8rem',
    },
    areaRoteiro:{
        flex: 3,
    },
    procura:{
        marginHorizontal: "1rem",
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: '1rem',
    },
    scrollVisitas:{
        flex: 15,
        marginTop: '2.3rem'
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
        textAlign: 'center',
        paddingLeft: '0.8rem'
    },
    txtRoteiroHoje:{
        color: '$txtcolor',
        textAlign: 'center',
        fontSize: '1.3rem',
        marginBottom: '0.6rem'
    },
    inputs:{
        backgroundColor: '$background',
        width: "100%",
        
        height: "2.8rem",
        borderWidth: "0.2rem",
        borderRadius: 10,
        borderColor: "#FFF",
        paddingHorizontal: "1rem",
        color: "$txtcolor",
    },
    voltar:{
        flexDirection: 'row',
        alignItems: 'center',
        flex:2.3
    },
    txtvoltar:{
        color:'$txtcolor',
        fontSize: '1.2rem',
    },
    pesquisa:{
        alignSelf: 'center',
        width: '25%',
        textAlign: 'center',
        padding: '1%'
    },

    

})
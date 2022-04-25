import EStyleSheet from "react-native-extended-stylesheet";

const Styles = EStyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '$background'
    },
    areaselecioneParceiro:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    scrollVisitas:{
        flex: 5,
        backgroundColor: '#DCD6D6',
        alignItems: "center",
        
    },
    txtParceiro:{
        color: '$txtcolor',
        fontSize: '2rem'
    },
    inputPesquisa:{
        width: '17rem',
        marginLeft: '1.5rem',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: '2rem',
        paddingHorizontal: '1rem'
    },
    areaInput:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: "100%"
    },
    menuOpcoes:{
        flexDirection: 'row',
        marginTop: "1rem",
        justifyContent: 'space-around',
        // marginHorizontal: '1.5rem',
        alignItems: "center",
        paddingHorizontal: "2rem",
        flex: 3
    },
    IconExport:{
        paddingBottom: "0.7rem",
    },
    ListaRoteiro:{
        width: '100%',
        flex: 18
    }
})

export default Styles
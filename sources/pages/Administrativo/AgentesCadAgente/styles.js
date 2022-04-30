import EStyleSheet from "react-native-extended-stylesheet";

const Styles = EStyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '$background'
    },
    areaTitulo:{
        flex: 0.25,
        alignItems: "center",
        marginTop: "15%"
    },
    txtTitulo:{
        color: '$txtcolor',
        fontSize: '$txtTitulo',
        textAlign: "center",
        width: "80%",
        fontWeight: 'bold'
    },
    areaFormulario:{
        flex: 1,
        width: '100%'
    },
    forms:{
        width: "80%",
        marginLeft: '10%'
    },
    txtInputForm:{
        backgroundColor: '#FFF',
        borderRadius: 4,
        height: '2.5rem'
    },
    txtForm:{
        color: "$txtcolor",
        marginBottom: '0.5rem',
        marginTop: "0.5rem"
    },
    btnCadastrar:{
        backgroundColor: '$PrimaryBTN',
        width: '60%',
        height: '100%',
        borderRadius: '0.4rem',
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: '1.2rem',
    },
    AreaBTN:{
        width: '100%',
        height: '3rem',
        alignItems: 'center',
        marginVertical: '1rem',
        marginTop: '11%'
    }


})

export default Styles;
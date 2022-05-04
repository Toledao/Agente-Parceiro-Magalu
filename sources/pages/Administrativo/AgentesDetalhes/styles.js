import EStyleSheet from 'react-native-extended-stylesheet'

const Styles = EStyleSheet.create({
    container:{
        flex: 1,
    },
    areaTitulo:{
        flex: 4,
        backgroundColor: "$background",
        paddingTop: '15%',
        paddingLeft: '3%',
    },
    txtAgente:{
        color: "$txtcolor"
    },
    areaDetalhes:{
        flex: 26,
        paddingTop: "10%",
        paddingHorizontal: '3%'
    },
    resulttxtAgente:{
        color: "$txtcolor",
        fontSize: "1.5rem",
        fontWeight: "bold"
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
        marginTop: '20%'
    },
    txtBTN:{
        color: "$txtcolor"
    }

})

export default Styles;
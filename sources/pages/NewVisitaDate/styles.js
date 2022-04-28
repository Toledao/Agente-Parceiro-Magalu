import EStyleSheet from "react-native-extended-stylesheet";

const Styles = EStyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '$background'
    },
    areaCliente:{
        flex: 5,
        backgroundColor: '$background',
        paddingHorizontal: '1.5rem',
    },
    areaDetalhes:{
        backgroundColor: '#DCD6D6',
        flex: 16,
        paddingVertical: '1rem',
        borderTopLeftRadius: '0.5rem',
        borderTopRightRadius: '0.5rem',
        alignItems: "center",
        paddingHorizontal: '1.5rem'
    },
    txtareaCliente:{
        color: "$txtcolor",
        fontSize: "1rem"
    },
    txtresultParceiro:{
        color: "$txtcolor",
        fontSize: "1.5rem",
        fontWeight: 'bold'
    },
    button:{
        backgroundColor : '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: "1rem",
        paddingVertical: '0.8rem',
        paddingHorizontal: '1rem',
        marginBottom: '1rem',
    },
    data:{
        fontSize: "1.1rem",
        fontWeight: "bold"
    },
    titulodata:{
        fontSize: '1.3rem',
        marginBottom: '0.4rem'
    },
    PickerCard:{
        width: '15rem',
        backgroundColor: '#FFF',
        borderRadius: '1rem'
    },
    areaData:{
        flex: 4
    },
    areaPicker:{
        flex: 4,
        alignItems: 'center'
    },
    PickerIntervalo:{
        width:'100%'
    },
    areaTags:{
        flex: 4,
        backgroundColor: '#FF0000',
        width: '100%'
    },
    AreaBTN:{
        width: '100%',
        height: '3rem',
        alignItems: 'center',
        marginVertical: '1rem'
    },
    btnCheckList:{
        backgroundColor: '$PrimaryBTN',
        width: '60%',
        height: '100%',
        borderRadius: '0.4rem',
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: '1.2rem',
    },
    txtCheckList:{
        color: '$txtcolor',
        fontSize: '1.1rem',
        fontWeight: 'bold'
    },
})

export default Styles
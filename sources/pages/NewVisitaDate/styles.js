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
        justifyContent: 'center',
    },
    data:{
        fontSize: "0.9rem",
        fontWeight: "bold",
        textAlignVertical: "center"
    },
    titulodata:{
        fontSize: '1.3rem',
        marginBottom: '0.4rem',
        textAlign:"center"
    },
    PickerCard:{
        width: '15rem',
        backgroundColor: '#FFF',
        borderRadius: '1rem'
    },
    areaPicker:{
        alignItems: 'center'    
    },
    PickerIntervalo:{
        width:'100%'
    },
    areaTags:{
        backgroundColor: '#FFF',
        borderRadius: '1rem',
        flexDirection: "row",
        padding: '0.3rem',
        //width: '100%'
    },
    areaData:{
        //alignItems: 'center'
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
    footer:{
        borderTopWidth: 1,
        borderTopColor: '#BAB4B4',
        paddingTop: '1rem',
    },
    texto:{
        fontSize: "1.1rem"
    },
    tags:{
        flex: 8,
        justifyContent: "center"
    },
    addTag:{
        textAlign:"right",
        justifyContent: 'center',
        marginLeft: '1rem',
        flex: 2
    },
    tag:{
        borderRadius: "2rem", 
        paddingHorizontal: "0.5rem", 
        paddingVertical: "0.1 rem",  
        margin: "0.1rem",
        alignItems:"center"
    },
    areaModal:{
        backgroundColor: "#FFF",
        borderRadius: "1rem",
        width: '60%'
    },
    fundoModal:{
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    ModalTitulo:{
        alignItems: "center",
        margin: '0.2rem'
    },
    Titulo:{
        color: "#000",
        fontSize: "1.2rem"
    },
    ModalCorpo:{
        alignItems: "center",
        margin: '0.4rem'
    },
    textTags:{
        color: "#000",
        fontSize: "0.9rem"
    },
    areaModalNovaTag:{
        backgroundColor: "#FFF",
        borderRadius: "1rem",
        width: '60%',
        marginTop: '2rem'
    },
    input:{
        backgroundColor: "#EEE",
        borderRadius: '0.5rem',
        width: '90%',
        paddingHorizontal: '1rem',
        height: '2.6rem',
        fontSize: '1rem'
    },
    btnaddTags:{
        backgroundColor: '$PrimaryBTN',
        width: '75%',
        borderRadius: '0.4rem',
        alignItems: 'center',
        justifyContent: "center",
        marginVertical: '1.2rem',
        paddingVertical: '0.3rem'
    },
    listaTags:{
        height: '8rem'
    }
})

export default Styles
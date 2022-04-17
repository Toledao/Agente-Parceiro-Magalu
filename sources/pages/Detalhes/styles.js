import EStyleSheet from "react-native-extended-stylesheet";

const Styles = EStyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '$background'
    },
    areaCliente:{
        flex: 1,
        backgroundColor: '$background',
        paddingHorizontal: '1.5rem',
        paddingTop: '1.3rem'
    },
    areaDetalhes:{
        backgroundColor: '#E5E5E5',
        flex: 4.8,
        borderTopLeftRadius: '0.5rem',
        borderTopRightRadius: '0.5rem',
        alignItems: "center"
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
    areaResponsavel:{
        marginTop: '1.5rem'
    },
    areaEndereco:{
        marginTop: '2.5rem',
        width: '73%'
    },
    txtresultResp:{
        fontSize: '1.4rem',
        fontWeight: 'bold',
        marginTop: '0.6rem'
    },
    txtInputs:{
        color: '#655D5D',
        marginBottom: '0.2rem'
    },
    txtresultLogradouro:{
        fontSize: '1.3rem',
        fontWeight: '400'
    },
    areanumBairro:{
        flexDirection: 'row',
        marginTop: '1rem'
    },
    areaBairro:{
        width: "80%",
        paddingLeft: '4rem'
    },
    txtresultados:{
        fontWeight: '400',
        fontSize: '1rem'
    },
    areaReferencia:{
        marginTop: '0.8rem',
    },
    areaCidadeUF:{
        flexDirection: 'row',
        marginTop: '1rem'
    },
    areaUF:{
        marginLeft: '1.5rem'
    },
    areaCEP:{
        marginTop: '1rem'
    },
    btnCheckList:{
        backgroundColor: '$PrimaryBTN',
        width: '70%',
        height: '8%',
        borderRadius: '0.4rem',
        alignItems: 'center',
        justifyContent: "center",
        marginTop: '4rem'
    },
    txtCheckList:{
        color: '$txtcolor',
        fontSize: '1.1rem',
        fontWeight: 'bold'
    }



})

export default Styles
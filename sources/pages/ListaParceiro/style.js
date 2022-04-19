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
    scrollParceiros:{
        flex: 4,
        backgroundColor: '#DCD6D6',
        alignItems: "center"
    },
    txtParceiro:{
        color: '$txtcolor',
        fontSize: '2rem'
    },
    inputPesquisa:{
        width: '17rem',
        marginLeft: '3.5rem',
    },
    areaInput:{
        marginTop: '2rem',
        marginRight: '4rem',
        marginBottom: '0.6rem',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%"
    }
})

export default Styles
import EStyleSheet from "react-native-extended-stylesheet";

export default Styles = EStyleSheet.create({
    container:{
        backgroundColor:'$background',
        flex: 1
    },
    areaHeader:{
        flex: 7,
    },
    areaForms:{
        flex: 10,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        paddingHorizontal: '2rem',
        marginVertical: '1rem',
        paddingVertical: '1rem'
    },
    AreaBTN:{
        width: '100%',
        flex: 2.3,
        alignItems: 'center',
        marginVertical: '1rem'
    },
    areaParData:{
        alignItems: "center"
    },
    txtTitulos:{
        color: '$txtcolor',
        fontSize: '1rem',
        marginTop: '0.5rem'
    },
    txtParData:{
        color: '$txtcolor',
        fontSize: '2rem',
        fontWeight: 'bold',
    },
    txtPerguntas:{
        fontSize: '1.3rem',
        textAlign: "center",
        paddingBottom: '0.7rem',
        paddingTop: "1.2rem"
    },
    btnEnviar:{
        backgroundColor: '$PrimaryBTN',
        width: '60%',
        height: '100%',
        borderRadius: '0.4rem',
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: '1.2rem',
    },
    txtEnviar:{
        color: '$txtcolor',
        fontSize: '1.1rem',
        fontWeight: 'bold'
    },
    input:{
        height: '2.5rem',
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: '1rem'
        

    },
    areaEndereco:{
        width: "100%",
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: "space-between"
    },
    AreaPerguntaend:{
        width:'40%',
    }, 
})
import EStyleSheet from "react-native-extended-stylesheet";

export default Styles = EStyleSheet.create({
    container:{
        backgroundColor:'$background',
        flex: 1
    },
    areaHeader:{
        flex: 0.3,
    },
    areaCheckList:{
        flex: 3.4,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    areaParData:{
        marginLeft: '1.5rem'
    },
    areaTituloCheck:{
        alignItems: 'center',
        marginTop: '0.4rem'
    },
    txtTitulos:{
        color: '$txtcolor',
        fontSize: '1rem',
        marginTop: '0.5rem'
    },
    txtParData:{
        color: '$txtcolor',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        width: "75%"
    },
    areaScroll:{
        width: '100%',
    },
    viewQuestions:{
        paddingHorizontal: '1rem',
        borderBottomColor: '#AAAAAA',
        borderBottomWidth: '0.1rem',
        marginTop: '1.4rem'
    },
    txtPerguntas:{
        fontSize: '1.3rem',
        textAlign: "center",
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
    AreaBTN:{
        width: '100%',
        height: '3rem',
        alignItems: 'center',
        marginVertical: '1rem'
    }
})
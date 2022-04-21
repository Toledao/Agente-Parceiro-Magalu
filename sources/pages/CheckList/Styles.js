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
        flex: 1,
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
    txtPerguntas:{
        color: '#000',
        fontSize: '1.2rem',
        textAlign: 'center'
    },
    inputOutros:{
        width: '100%',
        height: '2.5rem',
    },
    viewQuestions:{
        borderBottomColor: '#808080',
        borderBottomWidth: 1,
        paddingBottom: '1rem',
        marginTop: '1rem',
        paddingHorizontal: '1rem',

    }
})
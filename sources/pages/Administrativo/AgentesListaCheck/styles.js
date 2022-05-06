import EStyleSheet from "react-native-extended-stylesheet";

const Styles = EStyleSheet.create({
    container:{
        flex: 1
    },
    areaTitulo:{
        flex: 0.2,
        backgroundColor: '$background',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingHorizontal: '5%',
    },
    info:{
        color: '$txtcolor',
        fontSize: '1rem'
    },
    inforesult:{
        color: '$txtcolor',
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    areaFlatList:{
        flex: 1
    }

})

export default Styles;
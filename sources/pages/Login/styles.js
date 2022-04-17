import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:{
        backgroundColor: '$background', // Variável global
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column'
    },
    areaLogin:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputs:{
        backgroundColor: '#fff',
        width: "20rem", //Estava 17rem, Eu achei pequeno de mais, mas qualquer coisa so botar o antigo.. Att: João
        height: "2.8rem",
        borderRadius: 4,
        paddingHorizontal: "0.5rem",
        marginBottom: "1.8rem"
    },
    btnLogin:{
        backgroundColor: '$PrimaryBTN', // VARIÁVEL GLOBAL que está no app.js na pasta inicial
        width: "10rem",
        height: "2.4rem",
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 5,
    },
    loginimagem:{
        height: '40%'
    },
    txtLogin:{
        fontSize: "1rem",
        color: "#fff",
    }
    

})
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:{
        backgroundColor: '$background', // Variável global
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column'
    },
    areaLogin:{
        flex: 19,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputs:{
        backgroundColor: '#fff',
        width: "20rem", //Estava 17rem, Eu achei pequeno de mais, mas qualquer coisa so botar o antigo.. Att: João
        height: "2.8rem",
        borderRadius: 4,
        paddingHorizontal: "1rem",
        marginBottom: "1.8rem",
        alignSelf:"center"
    },
    btnLogin:{
        backgroundColor: '$PrimaryBTN', // VARIÁVEL GLOBAL que está no app.js na pasta inicial
        width: "10rem",
        height: "3rem",
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 5,
        // flex: 3,
        marginBottom: '10rem',
        alignSelf: "center",
        marginTop: "2rem"
    },
    loginimagem:{
        height: '40%',
        marginBottom: '2rem'
    },
    txtLogin:{
        fontSize: "1rem",
        color: "#fff",
    },
    txtReset:{
        marginVertical: '2rem',
        fontSize: "2rem",
        color: "#FFF",
        flex: 6,
        textAlignVertical: "center"
    },
    areaLogo:{
        flex: 2,
        alignItems: 'center',
        flexDirection: "row",
    },
    areainput:{
        flex: 12,
    },
    txtemail:{
        color: "#FFF",
        fontSize: "1rem",
        marginBottom: "1rem",
        marginHorizontal: '0.5rem'
    },
    voltar:{
        flexDirection: 'row',
        alignItems: 'center',
        position: "absolute"
    },
    txtvoltar:{
        color:'$txtcolor',
        fontSize: '1.2rem',
    },
    cellRoot: {
        width: '3rem',
        height: '3rem',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginHorizontal: "0.2rem"
      },
      cellText: {
        color: '#FFF',
        fontSize: 30,
        textAlign: 'center',
      },
      focusCell: {
        borderBottomColor: '#007AFF',
        borderBottomWidth: 2,
      },
      codeFieldRoot: {
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
})
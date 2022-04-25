import * as types from '../types'


const initialState = {
    logado: false,
    user: {nome: "", id: "", ehadm: 0, token: ''},
    isloading: false,
    errologin: false,
}

export default function (state = initialState, action){
    var newState;
    switch(action.type){
        case types.AUTH_LOGAR_REQUEST:
            newState = { ...initialState}
            newState.isloading = true
            return newState
            break;

        case types.AUTH_LOGAR_SUCCESS:
            console.log(action.payload)
            newState = {...state}
            newState.logado = true
            newState.user.nome = action.payload.nome
            newState.user.id = action.payload.id
            newState.user.ehadm = action.payload.ehAdm
            newState.user.token = action.payload.refreshToken
            newState.isloading = false;
            newState.errologin = false
            return newState
            break;

        case types.AUTH_LOGAR_FAILURE:
            newState = { ...initialState}
            newState.errologin = true;
            return newState;
            break;

        case types.AUTH_ERRO_RESET:
            newState = {...state}
            newState.errologin = false
            return newState

        case types.AUTH_DESLOGAR:
            return initialState

        default:
            return state
    }
}
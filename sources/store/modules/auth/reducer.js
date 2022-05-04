import * as types from '../types'
import jwt_decode  from 'jwt-decode'


const initialState = {
    logado: false,
    user: {nome: "", id: "", ehadm: 0, token: '', refreshToken: ''},
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
            const decoded = jwt_decode(action.payload.token)

            newState = {...state}
            newState.logado = true
            newState.user.nome = decoded.nome
            newState.user.id = decoded.sub
            newState.user.ehadm = decoded.adm
            newState.user.token = action.payload.token
            newState.user.refreshToken = action.payload.refreshToken
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


        case types.AUTH_REFRESHTOKEN:
            newState = { ...state}
            newState.user.token = action.payload.token
            if(action.payload.refreshToken != ""){
                newState.user.refreshToken = action.payload.refreshToken
            }
            return newState


        default:
            return state
    }
}
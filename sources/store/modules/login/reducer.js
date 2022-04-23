import * as types from '../types'


const initialState = {
    logado: false,
    user: {nome: "", id: "", tipo: 0},
    isloading: false,
    errologin: false,
}

export default function (state = initialState, action){
    switch(action.type){
        case types.LOGIN_LOGAR_REQUEST:
            const newstateRequest = { ...initialState}
            newstateRequest.isloading = true
            return newstateRequest
            break;

        case types.LOGIN_LOGAR_SUCCESS:
            const newstateLogin = { ... state};
            newstateLogin.logado = true
            newstateLogin.user.nome = action.payload.nome
            newstateLogin.user.id = action.payload.id
            newstateLogin.user.tipo = action.payload.tipo
            newstateLogin.isloading = false;
            newstateLogin.errologin = false
            return newstateLogin
            break;

        case types.LOGIN_LOGAR_FAILURE:
            const newstateFailure = { ...initialState}
            newstateFailure.errologin = true;
            return newstateFailure;
            break;

        case types.LOGIN_ERRO_RESET:
            const newstatereset = { ...state}
            newstatereset.errologin = false
            return newstatereset

        case types.LOGIN_DESLOGAR:
            return initialState

        default:
            return state
    }
}
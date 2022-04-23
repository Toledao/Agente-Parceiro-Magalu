import * as types from '../types'


const initialState = {
    logado: false,
    nome: "",
    id: "",
    isloading: false,
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
            console.log(action)
            newstateLogin.logado = true
            newstateLogin.nome = action.payload.nome
            newstateLogin.id = action.payload.id
            newstateLogin.isloading = false;
            return newstateLogin
            break;

        case types.LOGIN_LOGAR_FAILURE:
            const newstateFailure = { ...initialState}
            return newstateFailure;
            break;

        default:
            return state
    }
}
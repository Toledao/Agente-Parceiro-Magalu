import * as types from '../types'


const initialState = {
    roteiro: [],
    isloading: false,
    erro: false,
    done: true,
    carregado: false
}

export default function (state = initialState, action){
    var newState;
    switch(action.type){
        case types.ROTEIRO_CARREGAR_REQUEST:
            newState = { ...state}
            newState.isloading = true
            newState.done = false
            return newState
            break;

        case types.ROTEIRO_CARREGAR_SUCCESS:
            newState = { ...state}
            newState.isloading = false
            newState.done = true
            newState.erro = false
            newState.roteiro = action.payload
            newState.carregado = true
            return newState
            break;

        case types.ROTEIRO_CARREGAR_FAILURE:
            newState = { ...state}
            newState.isloading = false
            newState.done = true
            newState.erro = true            
            return newState
            break;

        default:
            return state
    }
}
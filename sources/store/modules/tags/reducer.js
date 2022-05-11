import * as types from '../types'


const initialState = {
    tags: [],
    isloading: false,
    erro: false,
    done: true,
    carregado: false,
    tagAdicionado: {}
}

export default function (state = initialState, action){
    var newState;
    switch(action.type){
        case types.TAGS_CARREGAR_REQUEST:
            newState = { ...state}
            newState.isloading = true
            newState.done = false
            return newState
            break;

        case types.TAGS_CARREGAR_SUCCESS:
            newState = { ...state}
            newState.isloading = false
            newState.done = true
            newState.erro = false
            newState.tags = action.payload
            newState.carregado = true
            return newState
            break;

        case types.TAGS_CARREGAR_FAILURE:
            newState = { ...state}
            newState.isloading = false
            newState.done = true
            newState.erro = true            
            return newState
            break;

        case types.TAGS_ADDTAG_REQUEST:
            newState = { ...state}
            newState.isloading = true
            newState.done = false
            return newState
            break;

        case types.TAGS_ADDTAG_SUCCESS:
            newState = { ...state}
            newState.isloading = false
            newState.done = true
            newState.erro = false
            newState.tagAdicionado = action.payload
            console.log("Reducer")
            console.log(newState.tagAdicionado)
            return newState
            break;

        case types.TAGS_ADDTAG_FAILURE:
            newState = { ...state}
            newState.isloading = false
            newState.done = true
            newState.erro = true            
            return newState
            break;

        case types.TAGS_REMOVEADICIONADO:
            newState = { ...state}
            newState.tagAdicionado = {}       
            return newState
            break;

        default:
            return state
    }
}
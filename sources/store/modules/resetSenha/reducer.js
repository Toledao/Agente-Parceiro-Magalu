import * as types from '../types'
import jwt_decode  from 'jwt-decode'


const initialState = {
    email: '',
    waitingCodigo: false,
    codigoAprovado: false,
    senhaAprovado: false,
    error: false,
    done: false,
}

export default function (state = initialState, action){
    var newState;
    switch(action.type){

        case types.RESETSENHA_PEDIDO_REQUEST:
            newState = {...initialState}
            newState.done = false
            return newState

        case types.RESETSENHA_PEDIDO_SUCCESS:
            newState = {...state}
            console.log(action)
            newState.done = true
            newState.error = false
            newState.waitingCodigo = true
            newState.codigoAprovado = false
            newState.senhaAprovado = false
            newState.email = action.payload
            return newState

        case types.RESETSENHA_PEDIDO_FAILURE:
            newState = {...state}
            newState.done = true
            newState.error = true
            newState.waitingCodigo = false
            newState.codigoAprovado = false
            newState.senhaAprovado = false
            return newState

        case types.RESETSENHA_CODIGO_REQUEST:
            newState = {...state}
            newState.done = false
            return newState

        case types.RESETSENHA_CODIGO_SUCCESS:
            newState = {...state}
            newState.done = true
            newState.error = false
            newState.waitingCodigo = false
            newState.senhaAprovado = false
            newState.codigoAprovado = true
            return newState

        case types.RESETSENHA_CODIGO_FAILURE:
            newState = {...state}
            newState.done = true
            newState.error = true
            newState.waitingCodigo = false
            newState.codigoAprovado = false
            newState.senhaAprovado = false
            return newState

        case types.RESETSENHA_NOVASENHA_REQUEST:
            newState = {...state}
            newState.done = false
            return newState

        case types.RESETSENHA_NOVASENHA_SUCCESS:
            newState = {...state}
            newState.done = true
            newState.error = false
            newState.waitingCodigo = false
            newState.codigoAprovado = false
            newState.senhaAprovado = true
            return newState

        case types.RESETSENHA_NOVASENHA_FAILURE:
            newState = {...state}
            newState.done = true
            newState.error = true
            newState.waitingCodigo = false
            newState.codigoAprovado = false
            newState.senhaAprovado = false
            return newState

        case types.RESETSENHA_SAIR:
            return initialState

        default:
            return state
    }
}
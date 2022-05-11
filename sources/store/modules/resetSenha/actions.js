import * as types from '../types'

export function PedidoRequest(payload){
    return {
        type: types.RESETSENHA_PEDIDO_REQUEST,
        payload
    }
}

export function PedidoSuccess(payload){
    return {
        type: types.RESETSENHA_PEDIDO_SUCCESS,
        payload
    }
}

export function PedidoFailure(){
    return {
        type: types.RESETSENHA_PEDIDO_FAILURE
    }
}

export function CodigoRequest(payload){
    return {
        type: types.RESETSENHA_CODIGO_REQUEST,
        payload
    }
}

export function CodigoSuccess(payload){
    return {
        type: types.RESETSENHA_CODIGO_SUCCESS,
        payload
    }
}

export function CodigoFailure(){
    return {
        type: types.RESETSENHA_CODIGO_FAILURE
    }
}

export function NovaSenhaRequest(payload){
    return {
        type: types.RESETSENHA_NOVASENHA_REQUEST,
        payload
    }
}

export function NovaSenhaSuccess(payload){
    return {
        type: types.RESETSENHA_NOVASENHA_SUCCESS,
        payload
    }
}

export function NovaSenhaFailure(){
    return {
        type: types.RESETSENHA_NOVASENHA_FAILURE
    }
}

export function sair(){
    return {
        type: types.RESETSENHA_SAIR
    }
}

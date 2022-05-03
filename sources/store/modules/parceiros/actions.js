import * as types from '../types'

export function ParceiroCarregarRequest(payload){
    return {
        type: types.PARCEIRO_CARREGAR_REQUEST,
        payload
    }
}

export function ParceiroCarregarSucesso(payload){
    return {
        type: types.PARCEIRO_CARREGAR_SUCCESS,
        payload
    }
}

export function ParceiroCarregarfailure(payload){
    return {
        type: types.PARCEIRO_CARREGAR_FAILURE,
        payload
    }
}
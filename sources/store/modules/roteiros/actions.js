import * as types from '../types'

export function RoteiroCarregarRequest(payload){
    return {
        type: types.ROTEIRO_CARREGAR_REQUEST,
        payload
    }
}

export function RoteiroCarregarSucesso(payload){
    return {
        type: types.ROTEIRO_CARREGAR_SUCCESS,
        payload
    }
}

export function RoteiroCarregarfailure(payload){
    return {
        type: types.ROTEIRO_CARREGAR_FAILURE,
        payload
    }
}
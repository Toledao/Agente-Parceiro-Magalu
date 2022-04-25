import * as types from '../types'

export function logarRequest(payload){
    return {
        type: types.AUTH_LOGAR_REQUEST,
        payload
    }
}

export function logarSuccess(payload){
    return {
        type: types.AUTH_LOGAR_SUCCESS,
        payload
    }
}

export function logarFailure(){
    return {
        type: types.AUTH_LOGAR_FAILURE
    }
}

export function deslogar(){
    return {
        type: types.AUTH_DESLOGAR
    }
}

export function reseterro(){
    return {
        type: types.AUTH_ERRO_RESET
    }
}
import * as types from '../types'

export function logarRequest(payload){
    return {
        type: types.LOGIN_LOGAR_REQUEST,
        payload
    }
}

export function logarSuccess(payload){
    return {
        type: types.LOGIN_LOGAR_SUCCESS,
        payload
    }
}

export function logarFailure(){
    return {
        type: types.LOGIN_LOGAR_FAILURE
    }
}

export function deslogar(){
    return {
        type: types.LOGIN_DESLOGAR
    }
}

export function reseterro(){
    return {
        type: types.LOGIN_ERRO_RESET
    }
}
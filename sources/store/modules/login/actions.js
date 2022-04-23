import * as types from '../types'

export function logarRequest(payload){
    return {
        type: types.LOGIN_LOGAR_REQUEST,
        payload
    }
}


export const logarRequestPromisse = (payload) => dispatch => new Promise((resolve,reject)=>{
    dispatch(logarRequest(payload));
    resolve("nao sei");
});

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
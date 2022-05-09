import * as types from '../types'

export function TagsCarregarRequest(payload){
    return {
        type: types.TAGS_CARREGAR_REQUEST,
        payload
    }
}

export function TagsCarregarSuccess(payload){
    return {
        type: types.TAGS_CARREGAR_SUCCESS,
        payload
    }
}

export function TagsCarregarFailure(payload){
    return {
        type: types.TAGS_CARREGAR_FAILURE,
        payload
    }
}

export function TagsAddTagRequest(payload){
    return {
        type: types.TAGS_ADDTAG_REQUEST,
        payload
    }
}

export function TagsAddTagSuccess(payload){
    return {
        type: types.TAGS_ADDTAG_SUCCESS,
        payload
    }
}

export function TagsAddTagFailure(payload){
    return {
        type: types.TAGS_ADDTAG_FAILURE,
        payload
    }
}

export function removeAdicionado(){
    return {
        type: types.TAGS_REMOVEADICIONADO
    }
}
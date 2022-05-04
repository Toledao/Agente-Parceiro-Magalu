import { call, put, all, takeLatest} from 'redux-saga/effects'
import * as action from './actions'
import * as types from '../types'
import axios from '../../../services/axios';

// Isso aqui é uma simulação de response da api

function* ParceiroRequest(payload){
    try {
        const {agenteId, token} = payload.payload

        axios.defaults.headers.common['Authorization'] = "Bearer " + token

        const response = yield call(axios.get, '/Parceiro',{params: {agenteId: agenteId}})

        console.log(response)

        yield put(action.ParceiroCarregarSucesso(response.data));
    } catch (error){
        console.log(error.response)
        yield put(action.ParceiroCarregarfailure());
    }
}

export default all([
    takeLatest(types.PARCEIRO_CARREGAR_REQUEST, ParceiroRequest)
])

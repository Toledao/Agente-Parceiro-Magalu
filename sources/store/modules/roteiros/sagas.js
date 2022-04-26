import { call, put, all, takeLatest} from 'redux-saga/effects'
import * as action from './actions'
import * as types from '../types'
import axios from '../../../services/axios';

// Isso aqui é uma simulação de response da api
const requisicao = () => 
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            const roteiro = [
            {id: "1", nomeparceiro: "Teste1", dia: "2022-04-25", horario: "16:00", bairro: "Jardim Bla"},
            {id: "2", nomeparceiro: "Teste2", dia: "2022-04-25", horario: "16:00", bairro: "Jardim Bla"},
            {id: "3", nomeparceiro: "Teste3", dia: "2022-04-25", horario: "16:00", bairro: "Jardim Bla"},
            {id: "4", nomeparceiro: "Teste4", dia: "2022-04-26", horario: "16:00", bairro: "Jardim Bla"},
            {id: "5", nomeparceiro: "Teste5", dia: "2022-04-26", horario: "16:00", bairro: "Jardim Bla"},
            {id: "6", nomeparceiro: "Teste6", dia: "2022-04-27", horario: "16:00", bairro: "Jardim Bla"},
            ]
            resolve(roteiro)

        },2000);
    });

function* roteiroRequest(){
    try {
        const response = yield call(requisicao)

        yield put(action.RoteiroCarregarSucesso(response));
    } catch (error){
        console.log(error)
        yield put(action.RoteiroCarregarfailure());
    }
}

export default all([
    takeLatest(types.ROTEIRO_CARREGAR_REQUEST, roteiroRequest)
])

import { call, put, all, takeLatest} from 'redux-saga/effects'
import * as action from './actions'
import * as types from '../types'
import axios from '../../../services/axios';


// Isso aqui é uma simulação de response da api
const requisicao = (email,senha) => 
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(email == 'joao@tome.com' && senha == '123'){
                resolve({nome: "JoaoTome", id: "asd123", tipo: 1});
            }else{
                reject();
            }
        },2000);
    });

function* pedidoRequest({ payload }){
    try {
        const {email} = payload
        console.log(payload)
        //const response = yield call(requisicao,email,senha);
        const response = yield call(axios.post, '/Login/EsqueciASenha/EnviarEmail', {"email": email})
        console.log(response)
        yield put(action.PedidoSuccess(email));
    } catch (error){
        console.log(error)
        yield put(action.PedidoFailure());
    }
}

function* codigoRequest({ payload }){
    try {
        const {email, codigo} = payload
        console.log(payload)
        //const response = yield call(requisicao,email,senha);
        const response = yield call(axios.post, '/Login/EsqueciASenha/Codigo', {"email": email, "codigo": codigo})
        console.log(response)
        yield put(action.CodigoSuccess());
    } catch (error){
        console.log(error)
        yield put(action.CodigoFailure());
    }
}

function* senhaRequest({ payload }){
    try {
        const {email, senha} = payload
        console.log(payload)
        //const response = yield call(requisicao,email,senha);
        const response = yield call(axios.post, '/Login/EsqueciASenha', {"email": email, "senha": senha})
        console.log(response)
        yield put(action.NovaSenhaSuccess());
    } catch (error){
        console.log(error)
        yield put(action.NovaSenhaFailure());
    }
}

export default all([
    takeLatest(types.RESETSENHA_CODIGO_REQUEST, codigoRequest),
    takeLatest(types.RESETSENHA_PEDIDO_REQUEST, pedidoRequest),
    takeLatest(types.RESETSENHA_NOVASENHA_REQUEST, senhaRequest),
])

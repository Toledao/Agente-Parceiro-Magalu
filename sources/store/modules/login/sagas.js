import { call, put, all, takeLatest} from 'redux-saga/effects'
import * as action from './actions'
import * as types from '../types'


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

function* loginRequest({ payload }){
    try {
        const {email, senha} = payload
        const response = yield call(requisicao,email,senha);
        yield put(action.logarSuccess(response));
    } catch (error){
        console.log(error)
        yield put(action.logarFailure());
    }
}

export default all([
    takeLatest(types.LOGIN_LOGAR_REQUEST, loginRequest)
])

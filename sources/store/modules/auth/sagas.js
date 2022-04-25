import { call, put, all, takeLatest} from 'redux-saga/effects'
import * as action from './actions'
import * as types from '../types'
import axios from '../../../services/axios';
import jwt_decode  from 'jwt-decode'

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
        //const response = yield call(requisicao,email,senha);
        const response = yield call(axios.post, '/Login', {"email": email,"senha": senha})
        console.log(response.data)
        console.log(response.data.refreshToken)

        const decoded = jwt_decode(response.data.refreshToken)
        console.log(decoded)

        yield put(action.logarSuccess(response.data));
    } catch (error){
        console.log(error)
        yield put(action.logarFailure());
    }
}

export default all([
    takeLatest(types.AUTH_LOGAR_REQUEST, loginRequest)
])

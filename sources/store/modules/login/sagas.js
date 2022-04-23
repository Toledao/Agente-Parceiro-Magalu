import { call, put, all, takeLatest} from 'redux-saga/effects'
import { useNavigation } from '@react-navigation/native';
import * as action from './actions'
import * as types from '../types'



const requisicao = (email,senha) => 
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(email == 'joao@tome.com' && senha == '123'){
                resolve({nome: "JoaoTome", id: "asd123"});
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
        console.warn(error)
        yield put(action.logarFailure());
    }
}

export default all([
    takeLatest(types.LOGIN_LOGAR_REQUEST, loginRequest)
])

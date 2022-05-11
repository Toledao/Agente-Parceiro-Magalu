import { all } from 'redux-saga/effects'
import Auth from './auth/sagas'
import Roteiro from './roteiros/sagas'
import Parceiro from './parceiros/sagas'
import ResetSenha from './resetSenha/sagas'
import Tags from './tags/sagas'


export default function* rootSaga(){
    return yield all([Auth,Roteiro,ResetSenha,Parceiro,Tags])
}
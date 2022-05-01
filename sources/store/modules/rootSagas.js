import { all } from 'redux-saga/effects'
import Auth from './auth/sagas'
import Roteiro from './roteiros/sagas'
import ResetSenha from './resetSenha/sagas'

export default function* rootSaga(){
    return yield all([Auth,Roteiro,ResetSenha])
}
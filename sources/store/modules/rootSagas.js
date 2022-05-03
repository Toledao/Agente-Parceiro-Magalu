import { all } from 'redux-saga/effects'
import Auth from './auth/sagas'
import Roteiro from './roteiros/sagas'
import Parceiro from './parceiros/sagas'

export default function* rootSaga(){
    return yield all([Auth,Roteiro,Parceiro])
}
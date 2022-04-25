import { all } from 'redux-saga/effects'
import Auth from './auth/sagas'
import Roteiro from './roteiros/sagas'

export default function* rootSaga(){
    return yield all([Auth,Roteiro])
}
import { all } from 'redux-saga/effects'
import Login from './login/sagas'

export default function* rootSaga(){
    return yield all([Login])
}
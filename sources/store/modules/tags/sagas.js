import { call, put, all, takeLatest} from 'redux-saga/effects'
import * as action from './actions'
import * as types from '../types'
import axios from '../../../services/axios';



function* TagRequest(payload){
    try {

        const {agenteId} = payload.payload
        const response = yield call(axios.get, '/Tag',{params: {agenteId: agenteId}})

        console.log(response.data)
        yield put(action.TagsCarregarSuccess(response.data));
    } catch (error){
        console.log(error)
        yield put(action.TagsCarregarFailure());
    }
}

function* AddTagRequest(payload){
    try {

        const Item = payload.payload
        console.log(Item)
        const response = yield call(axios.post, '/Tag',Item)

        console.log(response.data)
        yield put(action.TagsAddTagSuccess(response.data));
    } catch (error){
        console.log(error)
        yield put(action.TagsAddTagFailure());
    }
}


export default all([
    takeLatest(types.TAGS_CARREGAR_REQUEST, TagRequest),
    takeLatest(types.TAGS_ADDTAG_REQUEST, AddTagRequest)
])

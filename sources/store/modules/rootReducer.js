import { combineReducers } from "redux";
import AuthReducer from './auth/reducer'
import RoteiroReducer from "./roteiros/reducer";
import ParceiroReducer from "./parceiros/reducer"

export default combineReducers({
    Auth: AuthReducer, Roteiro: RoteiroReducer, Parceiro: ParceiroReducer
});
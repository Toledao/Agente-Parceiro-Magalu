import { combineReducers } from "redux";
import AuthReducer from './auth/reducer'
import RoteiroReducer from "./roteiros/reducer";
import ResetSenhaReducer from "./resetSenha/reducer"

export default combineReducers({
    Auth: AuthReducer, Roteiro: RoteiroReducer, ResetSenha: ResetSenhaReducer
});
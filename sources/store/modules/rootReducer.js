import { combineReducers } from "redux";
import AuthReducer from './auth/reducer'
import RoteiroReducer from "./roteiros/reducer";
import ParceiroReducer from "./parceiros/reducer"
import ResetSenhaReducer from "./resetSenha/reducer"
import TagsReducer from './tags/reducer'


export default combineReducers({
    Auth: AuthReducer, Roteiro: RoteiroReducer, ResetSenha: ResetSenhaReducer, Parceiro: ParceiroReducer, Tags: TagsReducer
});
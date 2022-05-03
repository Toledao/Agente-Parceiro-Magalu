import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import * as action from "../store/modules/auth/actions"

const token = useSelector(state => state.Auth.user.token)
const refreshToken = useSelector(state => state.Auth.user.refreshToken)
const dispath = useDispatch();

const axios = axios.create({
    baseURL: "http://192.168.1.107:3333/",  //Local Host  POR ALGUM MOTIVO LOCALHOST N FUNCIONA, coloque o ip aqui
    //baseURL: "localhost:3333"  //Produção Host
    headers: {"Authorization": "Bearer " + token}
   
})

axios.interceptors.response.use(
    function(response){ //se não der erro, faz nada
        return response
    },
    function(error){
        const errorResponse = error.response

        console.log(errorResponse)

        if(isTokenExpired(errorResponse)){
            return resetToken(error)
        }
        return Promise.reject(error)
    }
);

function isTokenExpired(errorResponse){
    if (errorResponse.data.message == "Invalid Token" ){
        return true
    }
    return false
}

let isAlreadyFetchingAccessToken = false;
let subscribers = [];    //lista de metodos para retentar

function resetToken(error){
    try{
        const {response: errorResponse } = error
        const resetToken = await getResetToken();
        if(!resetToken){
            return Promise.reject(error)
        }

        const retryOriginalRequest = newPromise(resolve => {
            addSubscriber(access_token => {
                errorResponse.config.headers.Authorization = 'Bearer ' + access_token;
                resolve(axios(errorResponse.config));
            })

        });

        if(!isAlreadyFetchingAccessToken){
            isAlreadyFetchingAccessToken = true;
            const response = await axios.post("/Login/RefreshToken", {"refreshToken":refreshToken})
            if (!response.data){
                return Promise.reject(error);
            }
            const newTokens = response.data;
            dispath(action.refreshToken(newTokens))
            isAlreadyFetchingAccessToken = false;
            onAccessTokenFetched(newToken);
        }
        return retryOriginalRequest;
    }
    catch (error) {
        return Promise.reject(err);
    }
}

function onAccessTokenFetched(access_token) {
	// When the refresh is successful, we start retrying the requests one by one and empty the queue
  subscribers.forEach(callback => callback(access_token));
  subscribers = [];
}

function addSubscriber(callback) {
  subscribers.push(callback);
}

export default axios;
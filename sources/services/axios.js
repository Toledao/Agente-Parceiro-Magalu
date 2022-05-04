import axios from "axios";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import * as action from "../store/modules/auth/actions"

let store

export const injectStore = _store => {
    store = _store
}


const customaxios = axios.create({
    baseURL: "http://192.168.1.107:3333/",  //Local Host  POR ALGUM MOTIVO LOCALHOST N FUNCIONA, coloque o ip aqui
    //baseURL: "http://177.153.33.88"  //Produção Host
    //headers: {"Authorization": "Bearer " + t}
   
})

customaxios.interceptors.response.use(
    function(response){ //se não der erro, faz nada
        return response
    },
    function(error){
        const errorResponse = error.response

        if(isTokenExpired(errorResponse)){
            return resetToken(error)
        }
        return Promise.reject(error)
    }
);

customaxios.interceptors.request.use(config => {
    config.headers.authorization = "Bearer " + store.getState().Auth.user.token
    return config
  })

function isTokenExpired(errorResponse){
    if(errorResponse.status = 401){
        return true
    }

    // if(errorResponse.data.message == "Invalid Token"){
    //     return true
    // }
    return false
}

let isAlreadyFetchingAccessToken = false;
let subscribers = [];    //lista de metodos para retentar

async function resetToken(error){
    try{
        const {response: errorResponse } = error
        const retryOriginalRequest = new Promise(resolve => {
            addSubscriber(access_token => {
                errorResponse.config.headers.Authorization = 'Bearer ' + access_token;
                resolve(axios(errorResponse.config));
            });

        });

        if(!isAlreadyFetchingAccessToken){
            isAlreadyFetchingAccessToken = true
            const refreshtoken = store.getState().Auth.user.refreshToken
            const response = await customaxios.post("/Login/RefreshToken", {refreshToken: refreshtoken})
            if (!response.data){
                return Promise.reject(error);
            }
            const newTokens = response.data;
            store.dispatch(action.refreshToken(newTokens))
            isAlreadyFetchingAccessToken = false;
            onAccessTokenFetched(newTokens.token);
        }
        return retryOriginalRequest;
    }
    catch (error) {
        console.log("erro")
        console.log(error)
        return Promise.reject(error);
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

export default customaxios;
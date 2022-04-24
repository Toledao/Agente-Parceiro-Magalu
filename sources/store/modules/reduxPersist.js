import AsyncStorage from "@react-native-async-storage/async-storage"; 
import { persistReducer } from "redux-persist"; 

export default reducers => {
    const persistedReducers = persistReducer(
        {
            key: "Agente-Parceiro-Magalu",
            storage: AsyncStorage,
            whitelist: [
                'Login'
            ]
        },
        reducers
    );
    return persistedReducers
}
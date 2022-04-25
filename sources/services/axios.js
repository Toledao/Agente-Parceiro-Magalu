import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.1.107:3333/"  //Local Host  POR ALGUM MOTIVO LOCALHOST N FUNCIONA, coloque o ip aqui
    //baseURL: "localhost:3333"  //Produção Host
})
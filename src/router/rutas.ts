import dotenv from "dotenv";
dotenv.config()

const IP_API = process.env.IP_API || "10.21.44.13";
const PORT_API = process.env.PORT_API || 3001;

console.log(IP_API,PORT_API);


const POST_SALIDALLEGADA_URL =`http://${IP_API}:${PORT_API}/reportes/` //varia  segun la propiedad isSalida
const POST_LOGIN_URL =`http://${IP_API}:${PORT_API}/login/` //varia  segun la propiedad isSalida
const GET_APARTADOS_URL =`http://${IP_API}:${PORT_API}/apartados/`;
const GET_REPORTES_INDIVIDUAL_URL =`http://${IP_API}:${PORT_API}/reportes/`;
const GET_REPORTES_GENERAL_URL =`http://${IP_API}:${PORT_API}/reportes/general/`;

export{
    POST_SALIDALLEGADA_URL ,
    GET_REPORTES_INDIVIDUAL_URL ,
    GET_REPORTES_GENERAL_URL ,
    GET_APARTADOS_URL,
    POST_LOGIN_URL
}
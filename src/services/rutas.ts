
const IP_API ="192.168.0.7"
const PORT_API =3001
const POST_SALIDALLEGADA_URL =`http://${IP_API}:${PORT_API}/reportes/` //varia  segun la propiedad isSalida
const GET_REPORTES_INDIVIDUAL_URL =`http://${IP_API}:${PORT_API}/reportes/`;
const GET_REPORTES_GENERAL_URL =`http://${IP_API}:${PORT_API}/reportes/general/`;

export{
    POST_SALIDALLEGADA_URL ,
    GET_REPORTES_INDIVIDUAL_URL ,
    GET_REPORTES_GENERAL_URL 
}
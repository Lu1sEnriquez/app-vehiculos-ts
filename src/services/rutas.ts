
const IP_API ="10.21.44.1"
const PORT_API =3001
const POST_SALIDALLEGADA_URL =`http://${IP_API}:${PORT_API}/reportes/` //varia  segun la propiedad isSalida
const GET_APARTADOS_URL =`http://${IP_API}:${PORT_API}/apartados/`;
const GET_REPORTES_INDIVIDUAL_URL =`http://${IP_API}:${PORT_API}/reportes/`;
const GET_REPORTES_GENERAL_URL =`http://${IP_API}:${PORT_API}/reportes/general/`;

// const IP_API ="10.21.44.8"
// const PORT_API =3001
// const POST_SALIDALLEGADA_URL =`http://${IP_API}:${PORT_API}/reportes/` //varia  segun la propiedad isSalida
// const GET_APARTADOS_URL =`http://${IP_API}:${PORT_API}/apartados/`;
// const GET_REPORTES_INDIVIDUAL_URL =`http://${IP_API}:${PORT_API}/reportes/`;
// const GET_REPORTES_GENERAL_URL =`http://${IP_API}:${PORT_API}/reportes/general/`;

export{
    POST_SALIDALLEGADA_URL ,
    GET_REPORTES_INDIVIDUAL_URL ,
    GET_REPORTES_GENERAL_URL ,
    GET_APARTADOS_URL
}
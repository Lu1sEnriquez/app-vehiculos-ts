
import datosSalidaType from "@/models/DatosSalidaType";
import { handleAsyncError, lanzarError } from "@/utils/error/handleError";
import { POST_SALIDALLEGADA_URL } from "@/router/rutas";
import DataType from "@/models/DataType";
import useToken from "@/hooks/useToken";

const useSalidaLlegada = () => {
  const { getToken } = useToken();



  const fetchWithToken = async (url: string, options?: RequestInit) => {
    const token = await getToken()
    console.log("apartados 37 token:" + token);

    const headerToken = {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    };
    const result = await fetch(url, { ...options, headers: headerToken });

    return result;
  };

  const salidaLlegadaPost = async (data: datosSalidaType) => {
    console.log(data);

    const result = await fetchWithToken(POST_SALIDALLEGADA_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.ok) {
      const responseData: DataType = await result.json();
      console.log('Respuesta exitosa:', responseData);
      return responseData;
    }

    const responseData: DataType = await result.json();
    console.log(responseData);
    
    if (responseData.error) lanzarError(responseData.message);
    
  };

  return {

    salidaLlegadaPost,
  };
};

export default useSalidaLlegada;
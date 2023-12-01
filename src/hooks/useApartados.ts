import DataType from "@/models/DataType";
import ApartadosType, { estadoType } from "@/models/ReporteGeneralType";
import { formatFecha } from "@/utils/format/formatFecha";
import { GET_APARTADOS_URL } from "@/router/rutas";
import { handleAsyncError, lanzarError } from "@/utils/error/handleError";
import useToken from "@/hooks/useToken";

const useApartados = () => {
   const { getToken } = useToken();
 
  // console.log('token' + getToken());



  /**
   * apartadosGet Function
   * Retrieves apartados data from the API.
   *
   */
  const apartadosGet = async () => {
    const fechaActual = new Date();
    fechaActual.setDate(fechaActual.getDate() - 5);
    fechaActual.setHours(0, 0);

    const fechaSiguiente = new Date();
    fechaSiguiente.setDate(fechaSiguiente.getDate() + 2);
    fechaSiguiente.setHours(23);

    const fechaActualFormat = formatFecha(fechaActual);
    const fechaSiguienteFormat = formatFecha(fechaSiguiente);

    console.log(`fechaActual: ${fechaActualFormat}`);
    console.log(`fechaSiguiente: ${fechaSiguienteFormat}`);

    try {
      const token = await getToken()
      //console.log("apartados 37 token:"+token);
      
      const headerToken = {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      };
      const result = await fetch(`${GET_APARTADOS_URL}?fechaInicio=${fechaActualFormat}&fechaFin=${fechaSiguienteFormat}`, {
        headers: headerToken,
      });

      if (result.ok) {
        const responseData: DataType = await result.json();

        if (responseData) {
          //console.log('Respuesta exitosa:', responseData);

          if (Array.isArray(responseData.data)) {
            const apartados: ApartadosType[] = responseData.data;
            return apartados;
          } else {
            return responseData.data
              ;
          }
        }
      }

      const responseData: DataType = await result.json();
      if (responseData.error) lanzarError(responseData.message);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return {
    apartadosGet,
  };
};

export default useApartados;


import DataType from "@/models/DataType";
import { GET_REPORTES_INDIVIDUAL_URL, GET_REPORTES_GENERAL_URL } from "@/router/rutas";
import { handleAsyncError, lanzarError } from "@/utils/error/handleError";
import { formatFecha } from "@/utils/format/formatFecha";
import useToken from "@/hooks/useToken";

const useReportes = () => {
  const { getToken } = useToken();
  //console.log('token' + getToken());



  const fetchWithToken = async (url: string, options?: RequestInit) => {
    const token = await getToken()
   // console.log("apartados 37 token:"+token);
    
    const headerToken = {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    };
    const result = await fetch(url, { ...options, headers: headerToken });

    return result;
  };

  const reportesGet = async () => {
    return handleAsyncError(async () => {
      const result = await fetchWithToken(GET_REPORTES_INDIVIDUAL_URL);

      if (result.ok) {
        const responseData: DataType = await result.json();
        console.log('Respuesta exitosa:', responseData);

        return responseData.data;
      }

      const responseData: DataType = await result.json();
      if (responseData.error) lanzarError(responseData.message);
    }, 'Error en reportesGet');
  };

  const reportesGetById = async (id: number) => {
    return handleAsyncError(async () => {
      const result = await fetchWithToken(`${GET_REPORTES_INDIVIDUAL_URL}${id}`);
      if (result.ok) {
        const responseData: DataType = await result.json();
        console.log('Respuesta exitosa:', responseData);
        return responseData.data;
      }

      const responseData: DataType = await result.json();
      if (responseData.error) lanzarError(responseData.message);
    }, 'Error en reportesGetById');
  };

  const reportesGeneralGet = async (fechaInicio?: Date, fechaFin?: Date) => {
    return handleAsyncError(async () => {
      //console.log(fechaInicio, fechaFin);

      if (fechaInicio && fechaFin) {
        const result = await fetchWithToken(`${GET_REPORTES_GENERAL_URL}?fechaInicio=${formatFecha(fechaInicio)}&fechaFin=${formatFecha(fechaFin)}`);
        if (result.ok) {
          const responseData: DataType = await result.json();
          if (Array.isArray(responseData.data)) return responseData.data;
        } else {
          const responseData: DataType = await result.json();
          if (responseData.error) lanzarError(responseData.message);
        }
      } else {
        const result = await fetchWithToken(GET_REPORTES_GENERAL_URL);
        if (result.ok) {
          const responseData: DataType = await result.json();
          if (Array.isArray(responseData.data)) {
            return responseData.data;
          }
        } else {
          const responseData: DataType = await result.json();
          if (responseData.error) lanzarError(responseData.message);
        }
      }
    }, 'Error en reportesGeneralGet');
  };

  const reportesGeneralGetById = async (id: number) => {
    return handleAsyncError(async () => {
      const result = await fetchWithToken(`${GET_REPORTES_GENERAL_URL}${id}`);
      if (result.ok) {
        const responseData: DataType = await result.json();
        console.log('Respuesta exitosa:', responseData);
        return responseData.data;
      }

      const responseData: DataType = await result.json();
      if (responseData.error) lanzarError(responseData.message);
    }, 'Error en reportesGeneralGetById');
  };

  const reportesGeneralGetByRangeDate = async (fechaInicio?: string, FechaFin?: string) => {
    return handleAsyncError(async () => {
      const result = await fetchWithToken(`${GET_REPORTES_GENERAL_URL}?fechaInicio=${fechaInicio}&fechaFin=${FechaFin}`);
      if (result.ok) {
        const responseData: DataType = await result.json();
        console.log('Respuesta exitosa:', responseData);
        return responseData.data;
      } else {
        const responseData: DataType = await result.json();
        console.log('No se encontró:', responseData);
        return responseData.message;
      }
    }, 'Error en reportesGeneralGetByRangeDate');
  };

  return {

    reportesGet,
    reportesGetById,
    reportesGeneralGet,
    reportesGeneralGetById,
    reportesGeneralGetByRangeDate,
  };
};

export default useReportes;
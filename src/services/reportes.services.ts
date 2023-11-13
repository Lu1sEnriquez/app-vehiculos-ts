import datosSalidaType from "@/models/DatosSalidaType";
import DataType, { mapResponseToReporteGeneral } from "@/models/DataType";
import { POST_SALIDALLEGADA_URL, GET_REPORTES_INDIVIDUAL_URL, GET_REPORTES_GENERAL_URL, GET_APARTADOS_URL } from "./rutas";
import ApartadosType from "@/models/ReporteGeneralType";
import { compararFechas } from "@/utils/format/formatFecha";


export async function handleAsyncError<T>(
  asyncFunction: () => Promise<T>,
  errorMessage: string
): Promise<T> {
  try {
    const result = await asyncFunction();
    return result;
  } catch (error) {
    console.error('Ocurrió un error:', error);
    throw new Error(errorMessage);
  }
}


export async function salidaLlegadaPost(data: datosSalidaType) {
  return handleAsyncError(async () => {
    console.log(data);

    const result = await fetch(POST_SALIDALLEGADA_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(result);
    
    if (result.ok) {
      const responseData = await result.json();
      console.log('Respuesta exitosa:', responseData);
      return responseData.data;
    } else {
      console.log('Error en la solicitud: ', result.status);
      console.log(await result.json());
      
      return null;
    }
  }, 'Error en salidaPost');
}





export async function reportesGet() {
  return handleAsyncError(async () => {
    const result = await fetch(GET_REPORTES_INDIVIDUAL_URL);

    if (result.ok) {
      const responseData = await result.json();
      console.log('Respuesta exitosa:', responseData);
      return responseData.data;
    } else {
      const errorMessage = `Error en la solicitud: ${result.status}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  }, 'Error en reportesGet');
}


export async function reportesGetById(id: number) {
  return handleAsyncError(async () => {
    const result = await fetch(GET_REPORTES_INDIVIDUAL_URL + id);
    if (result.ok) {
      const responseData = await result.json();
      console.log('Respuesta exitosa:', responseData);
      return responseData.data;
    } else {
      console.error('Error en la solicitud: ', result.status);
      return null;
    }
  }, 'Error en reportesGetById');
}


export async function reportesGeneralGet() {
  return handleAsyncError(async () => {
    const result = await fetch(GET_REPORTES_GENERAL_URL);
    if (result.ok) {
      const responseData: DataType = await result.json();
       if(Array.isArray(responseData.data)){
        return responseData.data;
      } 
    } else {
      console.error('Error en la solicitud: ', result.status);
      console.error('Error en la solicitud: ', await result.json());
      return null;
    }
  }, 'Error en reportesGeneralGet');
}



export async function reportesGeneralGetById(id: number) {
  return handleAsyncError(async () => {
    const result = await fetch(GET_REPORTES_GENERAL_URL + id);
    if (result.ok) {
      const responseData = await result.json();
      console.log('Respuesta exitosa:', responseData);
      return responseData.data;
    } else {
      console.error('Error en la solicitud: ', result.status);
      return null;
    }
  }, 'Error en reportesGeneralGetById');
}



export async function reportesGeneralGetByRangeDate(fechaInicio?: string, FechaFin?: string) {
  return handleAsyncError(async () => {
    const result = await fetch(GET_REPORTES_GENERAL_URL + `?fechaInicio=${fechaInicio}&fechaFin=${FechaFin}`);
    if (result.ok) {
      const responseData = await result.json();
      console.log('Respuesta exitosa:', responseData);
      return responseData.data;
    } else {
      const responseData = await result.json();
      console.log('No se encontró:', responseData);
      return responseData.message;
    }
  }, 'Error en reportesGeneralGetByRangeDate');
}
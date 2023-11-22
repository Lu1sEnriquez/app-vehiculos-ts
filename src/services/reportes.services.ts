import datosSalidaType from "@/models/DatosSalidaType";
import DataType, { mapResponseToReporteGeneral } from "@/models/DataType";
import { POST_SALIDALLEGADA_URL, GET_REPORTES_INDIVIDUAL_URL, GET_REPORTES_GENERAL_URL } from "./rutas";
import ApartadosType from "@/models/ReporteGeneralType";
import { compararFechas, formatFecha } from "@/utils/format/formatFecha";
import { handleAsyncError, lanzarError } from "./errors";



export async function reportesGet() {
  return handleAsyncError(async () => {
    const result = await fetch(GET_REPORTES_INDIVIDUAL_URL);

    if (result.ok) {
      const responseData = await result.json();
      console.log('Respuesta exitosa:', responseData);
      return responseData.data;
    }
    const responseData: DataType = await result.json();
        if (responseData.error) lanzarError(responseData.message)
  }, 'Error en reportesGet');
}


export async function reportesGetById(id: number) {
  return handleAsyncError(async () => {
    const result = await fetch(GET_REPORTES_INDIVIDUAL_URL + id);
    if (result.ok) {
      const responseData = await result.json();
      console.log('Respuesta exitosa:', responseData);
      return responseData.data;
    }
    const responseData: DataType = await result.json();
    if (responseData.error) lanzarError(responseData.message)
  }, 'Error en reportesGetById');
}


export async function reportesGeneralGet(fechaInicio?: Date, fechaFin?: Date) {
  return handleAsyncError(async () => {

    console.log(fechaInicio, fechaFin);

    if (fechaInicio && fechaFin) {

      const result = await fetch(`${GET_REPORTES_GENERAL_URL}?fechaInicio=${formatFecha(fechaInicio)}&fechaFin=${formatFecha(fechaFin)}`);
      if (result.ok) {
        const responseData: DataType = await result.json();
        if (Array.isArray(responseData.data)) return responseData.data;
      } else {

        const responseData: DataType = await result.json();
        if (responseData.error) lanzarError(responseData.message)

      }

    } else {
      const result = await fetch(GET_REPORTES_GENERAL_URL);
      if (result.ok) {
        const responseData: DataType = await result.json();
        if (Array.isArray(responseData.data)) {
          return responseData.data;
        }
      } else {

        const responseData: DataType = await result.json();
        if (responseData.error) lanzarError(responseData.message)
      }
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
    }
    const responseData: DataType = await result.json();
        if (responseData.error) lanzarError(responseData.message)
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
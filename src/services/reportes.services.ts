import datosSalidaType from "@/models/DatosSalidaType";
import DataType, { mapResponseToReporteGeneral } from "@/models/DataType";
import { POST_SALIDALLEGADA_URL, GET_REPORTES_INDIVIDUAL_URL, GET_REPORTES_GENERAL_URL } from "./rutas";
import ReporteGeneralType from "@/models/ReporteGeneralType";

export async function salidaPost(data: datosSalidaType) {
  try {
    console.log(data);

    const result = await fetch(POST_SALIDALLEGADA_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.ok) {
      const responseData = await result.json();
      console.log('Respuesta exitosa:', responseData);
      return responseData.data;
    } else {
      console.error('Error en la solicitud: ', result.status);
      return null;
    }
  } catch (error) {
    console.error('Ocurrió un error:', error);
    throw error;
  }
}

export async function llegadaPost(data: datosSalidaType) {
  return salidaPost(data);
}

export async function reportesGet() {
  try {
    const result = await fetch(GET_REPORTES_INDIVIDUAL_URL);
    if (result.ok) {
      const responseData = await result.json();
      console.log('Respuesta exitosa:', responseData);
      return responseData.data;
    } else {
      console.error('Error en la solicitud: ', result.status);
      return null;
    }
  } catch (error) {
    console.error('Ocurrió un error:', error);
    throw error;
  }
}

export async function reportesGetById(id: number) {
  try {
    const result = await fetch(GET_REPORTES_INDIVIDUAL_URL + id);
    if (result.ok) {
      const responseData = await result.json();
      console.log('Respuesta exitosa:', responseData);
      return responseData.data;
    } else {
      console.error('Error en la solicitud: ', result.status);
      return null;
    }
  } catch (error) {
    console.error('Ocurrió un error:', error);
    throw error;
  }
}

export async function reportesGeneralGet() {
  try {
    const result = await fetch(GET_REPORTES_GENERAL_URL);
    if (result.ok) {
      const responseData: DataType = await result.json();
      console.log('Respuesta exitosa:', responseData);
      return Array.isArray(responseData.data) ? mapResponseToReporteGeneral(responseData) : null;
    } else {
      console.error('Error en la solicitud: ', result.status);
      return null;
    }
  } catch (error) {
    console.error('Ocurrió un error:', error);
    throw error;
  }
}

export async function reportesGeneralGetById(id: number) {
  try {
    const result = await fetch(GET_REPORTES_GENERAL_URL + id);
    if (result.ok) {
      const responseData = await result.json();
      console.log('Respuesta exitosa:', responseData);
      return responseData.data;
    } else {
      console.error('Error en la solicitud: ', result.status);
      return null;
    }
  } catch (error) {
    console.error('Ocurrió un error:', error);
    throw error;
  }
}
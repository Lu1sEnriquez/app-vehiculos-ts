import DataType from "@/models/DataType";
import ApartadosType, { estadoType } from "@/models/ReporteGeneralType";
import { compararFechas, formatFecha } from "@/utils/format/formatFecha";
import { GET_APARTADOS_URL } from "./rutas";
import { handleAsyncError, lanzarError } from "./errors";


export async function apartadosGet(type?: estadoType) {
 
    const fechaActual = new Date();
    fechaActual.setDate(fechaActual.getDate() - 1);
    fechaActual.setHours(0, 0);

    const fechaSiguiente = new Date();
    fechaSiguiente.setDate(fechaSiguiente.getDate() + 2);
    fechaSiguiente.setHours(23);

    const fechaActualFormat = formatFecha(fechaActual);
    const fechaSiguienteFormat = formatFecha(fechaSiguiente);

    console.log(`fechaActual: ${fechaActualFormat}`);
    console.log(`fechaSiguiente: ${fechaSiguienteFormat}`);

    const result = await fetch(`${GET_APARTADOS_URL}?fechaInicio=${fechaActualFormat}&fechaFin=${fechaSiguienteFormat}`);

    if (result.ok) {
      const responseData: DataType = await result.json();

      if (responseData) {
        console.log('Respuesta exitosa:', responseData);

        if (type === "Pendiente" || type === "Circulacion" || type === "Finalizado") {
          // Verifica si responseData.data es del tipo ApartadosType
          if (Array.isArray(responseData.data)) {
            const apartados: ApartadosType[] = responseData.data;
            return apartados;
          } else {
            console.log(responseData.data);
            // Puedes manejar aquí el caso en que responseData.data no sea un array
            return [];
          }
        } else {
          if (Array.isArray(responseData.data)) {
            const apartados: ApartadosType[] = responseData.data;
            return apartados;
          } else {
            // Puedes manejar aquí el caso en que responseData.data no sea un array
            console.log(responseData.data);
            return [];
          }
        }
      }
    }
    lanzarError(result.status)
 

   
}
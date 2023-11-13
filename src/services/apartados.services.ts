import DataType from "@/models/DataType";
import ApartadosType from "@/models/ReporteGeneralType";
import { compararFechas, formatFecha } from "@/utils/format/formatFecha";
import { GET_APARTADOS_URL } from "./rutas";
import { handleAsyncError } from "./reportes.services";

export async function apartadosGet(type?: "Pendiente" | "Circulacion" | "Finalizado") {
    return handleAsyncError(async () => {
      const fechaActual = new Date();
      fechaActual.setDate(fechaActual.getDate()-1);
      fechaActual.setHours(0, 0);
      
      const fechaSiguiente = new Date();
      fechaSiguiente.setDate(fechaSiguiente.getDate() + 2);
      fechaSiguiente.setHours(23);
      
      const fechaActualFormat = `${formatFecha(fechaActual)}`;
      const fechaSiguienteFormat = `${formatFecha(fechaSiguiente)}`;
      
      console.log(fechaActualFormat);
      console.log(fechaSiguienteFormat);
      
        console.log(`fechaActual:`+fechaActualFormat);
      console.log(`fechaSiguiente:`+fechaSiguiente);
      
      const result = await fetch(`${GET_APARTADOS_URL}?fechaInicio=${fechaActualFormat}&fechaFin=${fechaSiguienteFormat}`);
  
      // Obtiene la fecha actual y la fecha siguiente
       
      if (result.ok) {
        const responseData: DataType = await result.json()
        if (responseData) {
          console.log('Respuesta exitosa:', responseData);
          if (type === "Pendiente" || type === "Circulacion" || type === "Finalizado") {
            // Verifica si responseData.data es del tipo ApartadosType
            if (Array.isArray(responseData.data)) {
              const apartados: ApartadosType[] = responseData.data;
              return responseData.data
              
            } else {
              console.log(responseData.data);
              
            }
          } else {
            if (Array.isArray(responseData.data)) {
              const apartados: ApartadosType[] = responseData.data;
                
            }           
            return responseData.data
          }
        }
      }
      return [];
    }, 'Error en apartadosGet');
  }
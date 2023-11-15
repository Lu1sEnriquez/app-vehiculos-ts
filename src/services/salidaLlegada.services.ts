import datosSalidaType from "@/models/DatosSalidaType";
import { handleAsyncError, lanzarError } from "./errors";
import { POST_SALIDALLEGADA_URL } from "./rutas";


export async function salidaLlegadaPost(data: datosSalidaType) {
   
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
      } 
      
      lanzarError(result.status)
   
  }
import datosSalidaType from "@/models/DatosSalidaType";
import { handleAsyncError, lanzarError } from "./errors";
import { POST_SALIDALLEGADA_URL } from "./rutas";
import DataType from "@/models/DataType";


export async function salidaLlegadaPost(data: datosSalidaType) {
   
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
      } 
      
      const responseData:DataType = await result.json();
      console.log(responseData);
      
      if(responseData.error)  lanzarError(responseData.message)
   
  }
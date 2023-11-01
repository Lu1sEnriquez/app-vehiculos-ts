import datosSalidaType from "@/models/DatosSalidaType";
import { POST_URL } from "./rutas";

export async function salidaPost(data: datosSalidaType) {
   try {
    console.log(data);
    
    const result = await fetch(POST_URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (result.ok) {
        const responseData = await result.json(); // Parsear la respuesta JSON
        console.log('Respuesta exitosa:', responseData);
        return responseData; // Retornar la respuesta
    } else {
        console.error('Error en la solicitud: ', result.status);
    }
   } catch (error) {
    console.error('Ocurrió un error:', error);
    throw error; // Re-lanzar el error para que pueda ser manejado por quien llame a la función
   }
}
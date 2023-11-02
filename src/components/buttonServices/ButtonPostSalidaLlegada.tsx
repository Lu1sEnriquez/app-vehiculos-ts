"use client"
import { DatosSalidasProvider, useDatosSalidaReducer } from "@/reducer/salidasReducer"
import { ButtonAzul } from "../basicos/ButtonAzul"
import { salidaPost } from "@/services/reportes.services";
import { data } from "autoprefixer";

function ButtonPostSalidaLlegada() {
    const { state, dispatch } = useDatosSalidaReducer();

    async function handlePost() {
        try {
            
            const result = await salidaPost(state);
            // Aquí puedes manejar la respuesta exitosa si es necesario
            console.log("Solicitud POST exitosa:", result);
        } catch (error) {
            // Manejar cualquier error que ocurra durante la solicitud
            console.error("Ocurrió un error al realizar la solicitud POST:", error);
        }
    }

    function handleClick() {
        handlePost(); // Llama a la función asincrónica handlePost
    }

    return (
        <ButtonAzul text="Registrar" onClick={handleClick}></ButtonAzul>
    );
}

export default ButtonPostSalidaLlegada;
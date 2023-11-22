"use client";
import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";
import { ButtonAzul, ButtonAzulLink } from "../basicos/ButtonAzul";
import useModal from "@/utils/custom/useModal";
import { salidaLlegadaPost } from "@/services/salidaLlegada.services";
import { useErrorReducer } from "@/reducer/errorReducer";
import ModalComponent from "../modal/Modal";
import Image from "next/image";
import Swal from "sweetalert2";
import checkIcon from "@/assets/icons/icons8-comprobado-100.png";
import datosSalidaLlegadaType from "@/models/DatosSalidaLlegada";
import datosSalidaType from "@/models/DatosSalidaType";

function ButtonPostSalidaLlegada() {
  const { state } = useDatosSalidaLlegadaReducer();

  const errorReducer = useErrorReducer();
  async function handlePost() {
    try {
      const result = await salidaLlegadaPost(state);
      alerta();
      // console.log("Solicitud POST exitosa:", result);
    } catch (error) {
      const incompletos = obtenerCamposFaltantes();
      if (incompletos) {
        errorReducer.dispatch({
          type: "SET_ERROR",
          payload: "Formulario Incompleto",
        });

        errorReducer.dispatch({
          type: "SET_MESSAGE",
          payload: incompletos,
        });
      }
      errorReducer.dispatch({
        type: "SET_ERROR",
        payload: "Ya Existe",
      });

      errorReducer.dispatch({
        type: "SET_MESSAGE",
        payload: `${error}`,
      });
    }
  }

  function obtenerCamposFaltantes() {
    const camposFaltantes: (keyof datosSalidaType)[] = [];

    for (const key in state) {
      if (state[key as keyof datosSalidaType] === null) {
        if (
          (key as keyof datosSalidaType) != "chofer" &&
          key != "estado" &&
          key != "destino"
        ) {
          camposFaltantes.push(key as keyof datosSalidaType);
        }
      }
    }
    console.log(camposFaltantes.length);
    
    if (camposFaltantes.length === 0) return null;
    return `${camposFaltantes.join(", ")}, Estan Vacios`;
  }

  function alerta() {
    if (errorReducer.state.error) {
      Swal.fire({
        title: "Exito!",
        text: `Registro Exitoso`,
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          errorReducer.dispatch({ type: "SET_ERROR", payload: null });
          errorReducer.dispatch({ type: "SET_MESSAGE", payload: null });
        }
      });
    }
  }
  function handleClick() {
    handlePost(); // Llama a la función asincrónica handlePost
  }

  const { closeModal, isModalOpen, openModal } = useModal();
  return <ButtonAzul text="Registrar" onClick={handleClick}></ButtonAzul>;
}

export default ButtonPostSalidaLlegada;

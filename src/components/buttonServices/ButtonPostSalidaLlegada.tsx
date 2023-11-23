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
import { useRouter } from "next/navigation";
function ButtonPostSalidaLlegada() {
  const { state } = useDatosSalidaLlegadaReducer();
  const router = useRouter();
  const errorReducer = useErrorReducer();
  async function handlePost() {
    try {
      const result = await salidaLlegadaPost(state);
      if (!result?.error) alerta();

      // console.log("Solicitud POST exitosa:", result);
    } catch (error) {
      const incompletos = obtenerCamposFaltantes(state);

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
      // errorReducer.dispatch({
      //   type: "SET_ERROR",
      //   payload: "Ya Existe",
      // });

      // errorReducer.dispatch({
      //   type: "SET_MESSAGE",
      //   payload: `${error}`,
      // });
    }
  }
  function obtenerCamposFaltantes(data: datosSalidaType) {
    console.log(data);

    if (data.isSalida) {
      console.log("salida");
      const faltantes = obtenerCamposFaltantesSalida(data);
      console.log(faltantes);
      return faltantes;
    } else {
      const faltantes = obtenerCamposFaltantesLlegada(data);
      console.log(faltantes);
      return faltantes;
    }
  }
  function obtenerCamposFaltantesSalida(data: datosSalidaType) {
    const camposFaltantes: (keyof datosSalidaType)[] = [];
    console.log(data);

    for (const key in data) {
      if (data[key as keyof datosSalidaType] == null) {
        if (
          (key as keyof datosSalidaType) == "fecha" ||
          (key as keyof datosSalidaType) == "hora" ||
          (key as keyof datosSalidaType) == "destino" ||
          (key as keyof datosSalidaType) == "placa" ||
          (key as keyof datosSalidaType) == "licencia" ||
          (key as keyof datosSalidaType) == "tanque" ||
          (key as keyof datosSalidaType) == "kilometraje" ||
          (key as keyof datosSalidaType) == "departamento" ||
          (key as keyof datosSalidaType) == "nombreSolicitante" ||
          (key as keyof datosSalidaType) == "nombreVigilante" ||
          (key as keyof datosSalidaType) == "firmaSolicitante" ||
          (key as keyof datosSalidaType) == "firmaVigilante"
        ) {
          camposFaltantes.push(key as keyof datosSalidaType);
        }
      }
    }

    if (camposFaltantes.length === 0) return null;
    return `${camposFaltantes.join(", ")}, Estan Vacios`;
  }

  function obtenerCamposFaltantesLlegada(data: datosSalidaType) {
    const camposFaltantes: (keyof datosSalidaType)[] = [];

    for (const key in data) {
      if (data[key as keyof datosSalidaType] === null) {
        if (
          (key as keyof datosSalidaType) == "fecha" ||
          (key as keyof datosSalidaType) == "hora" ||
          (key as keyof datosSalidaType) == "tanque" ||
          (key as keyof datosSalidaType) == "kilometraje" ||
          (key as keyof datosSalidaType) == "nombreVigilante" ||
          (key as keyof datosSalidaType) == "firmaSolicitante" ||
          (key as keyof datosSalidaType) == "firmaVigilante"
        ) {
          camposFaltantes.push(key as keyof datosSalidaType);
        }
      }
    }
    if (camposFaltantes.length === 0) return null;
    return `${camposFaltantes.join(", ")}, Estan Vacios`;
  }

  function alerta() {
    if (errorReducer) {
      Swal.fire({
        title: "Exito!",
        text: `Registro Exitoso`,
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          errorReducer.dispatch({ type: "SET_ERROR", payload: null });
          errorReducer.dispatch({ type: "SET_MESSAGE", payload: null });

          if (state.isSalida) {
            router.push("/salidas");
          } else {
            router.push("/llegadas");
          }
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

"use client";
import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";
import { ButtonAzul, ButtonAzulLink } from "../basicos/ButtonAzul";
import { useState } from "react";
import useModal from "@/utils/custom/useModal";
import { salidaLlegadaPost } from "@/services/salidaLlegada.services";
import { useErrorReducer } from "@/reducer/errorReducer";
import ModalComponent from "../modal/Modal";
import { CiCircleCheck } from "react-icons/ci";
import Image from "next/image";

import checkIcon from "@/assets/icons/icons8-comprobado-100.png";

function ButtonPostSalidaLlegada() {
  const { state } = useDatosSalidaLlegadaReducer();

  const { dispatch } = useErrorReducer();
  async function handlePost() {
    try {
      const result = await salidaLlegadaPost(state);    
        console.log("Solicitud POST exitosa:", result);
        openModal();    
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message || "Error Desconocido",
      });
      
    }
  }

  function handleClick() {
    handlePost(); // Llama a la función asincrónica handlePost
  }

  const { closeModal, isModalOpen, openModal } = useModal();
  return (
    <>
      
        <ModalComponent isOpen={isModalOpen} onClose={closeModal}>
          <section className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center">
              <h1 className="font-nunito-sans font-bold">
                REGISTRADO CON EXITO
              </h1>
              <Image src={checkIcon} alt="Perfecto" />
            </div>
            <ButtonAzulLink href="/apartados" text="Regresar"></ButtonAzulLink>
          </section>
        </ModalComponent>
      
      <ButtonAzul text="Registrar" onClick={handleClick}></ButtonAzul>
    </>
  );
}

export default ButtonPostSalidaLlegada;

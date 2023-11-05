"use client";

import useModal from "@/utils/custom/useModal";
import { ButtonAzul } from "@/components/basicos/ButtonAzul";
import Modal from "./Modal";
import InputFirma, { firmaType } from "../Formularios/inputs/InputFirma";
import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";
import { ReactNode } from "react";
import LabelFormulario from "../Formularios/inputs/LabelFormulario";

interface Props {
  type?: firmaType;
  children?:ReactNode
}

function ButtonFirmaModal({ type, children }: Props) {
  const { isModalOpen, openModal, closeModal } = useModal();

  const { state, dispatch } = useDatosSalidaLlegadaReducer();

  let textButton;
  let containerClass = "";

  if (type == "Solicitante") {
    if (!state.firmaSolicitante) {
      textButton = "Agregar firma Solicitante";
      containerClass = "w-full";
    } else {
      textButton = "Modificar";
      containerClass = "w-62";
    }
  } else {
    if (!state.firmaVigilante) {
      textButton = "Agregar firma Vigilante";
      containerClass = "w-full";
    } else {
      textButton = "Modificar";
      containerClass = "w-62";
    }
  }

  return (
    <div>
      <LabelFormulario>{`Firma ${type}`}</LabelFormulario>
      <div className={containerClass}>
        <ButtonAzul text={textButton} onClick={openModal} />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={type}>
        <InputFirma onClose={closeModal} type={type}></InputFirma>
      </Modal>
    </div>
  );
}
export default ButtonFirmaModal;

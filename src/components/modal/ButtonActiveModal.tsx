"use client";

import useModal from "@/utils/custom/useModal";
import { ButtonAzul } from "@/components/basicos/ButtonAzul";
import Modal from "./Modal";
import InputFirma from "../Formularios/inputs/InputFirma";
import { useDatosSalidaReducer } from "@/reducer/salidasReducer";
import LabelFormulario from "../Formularios/LabelFormulario";
type vigilanteType = "Vigilante";
type solicitanteType = "Solicitante";
type firmaType = vigilanteType | solicitanteType;

function ButtonFirmaModal({ type }: { type: firmaType }) {
  const { isModalOpen, openModal, closeModal } = useModal();

  const { state, dispatch } = useDatosSalidaReducer();

  let textButton;
  let containerClass='';

  if (type == "Solicitante") {
    if (!state.firmaSolicitante) {
      textButton = "Agregar firma Solicitante";
      containerClass = "w-full"

    } else {
      textButton = "Modificar";
      containerClass = "w-62"
    }

  } else {
    if (!state.firmaVigilante) {
      textButton = "Agregar firma Vigilante";
      containerClass = "w-full"

    } else {
      textButton = "Modificar";
      containerClass = "w-62"

    }
  }

  return (
    <>
      <LabelFormulario>{`Firma ${type}`}</LabelFormulario>
      <div className={containerClass}>
        <ButtonAzul text={textButton} onClick={openModal} />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={type}>
        <InputFirma onClose={closeModal} id={type}></InputFirma>
      </Modal>
    </>
  );
}
export default ButtonFirmaModal;

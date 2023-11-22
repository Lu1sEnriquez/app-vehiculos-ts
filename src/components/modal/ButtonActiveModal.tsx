"use client";

import useModal from "@/utils/custom/useModal";
import { ButtonAzul } from "@/components/basicos/ButtonAzul";
import ModalFirma from "./ModalFirma";
import InputFirma, { firmaType } from "../Formularios/inputs/InputFirma";
import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";
import { ReactNode ,useEffect} from "react";
import LabelFormulario from "../Formularios/inputs/LabelFormulario";

interface Props {
  type?: firmaType;
  children?:ReactNode
}

function ButtonFirmaModal({ type, children }: Props) {
  const { isModalOpen, openModal, closeModal } = useModal();

  const { state, dispatch } = useDatosSalidaLlegadaReducer();

  type textButtonType = "Agregar firma Solicitante" |"Agregar firma Vigilante"| "Modificar"| ""
  let textButton:textButtonType="";
  let containerClass = "";

  useEffect(() => {
   
    
  }, [])
  
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


function handleButton(){
  if (type === "Vigilante" && state.firmaVigilante ) {
    // Cambia '==' por '==='
    dispatch({ type: "SET_FIRMA_VIGILANTE", payload: null });
  } else if (type === "Solicitante" && state.firmaSolicitante) {
    // Cambia '==' por '==='
    dispatch({ type: "SET_FIRMA_SOLICITANTE", payload: null });
  }
  openModal()

}

  return (
    <div>
      <LabelFormulario>{`Firma ${type}`}</LabelFormulario>
      <div className={containerClass}>
        <ButtonAzul text={textButton} onClick={handleButton} />
      </div>

      <ModalFirma isOpen={isModalOpen} onClose={closeModal} title={type}>
        <InputFirma onClose={closeModal} type={type}></InputFirma>
      </ModalFirma>
    </div>
  );
}
export default ButtonFirmaModal;

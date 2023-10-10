"use client";

import useModal from "@/app/utils/useModal";
import ButtonAzul from "../Formularios/ButtonAzul";
import Modal from "./Modal";
import InputFirma from "../Formularios/inputs/InputFirma";


function ButtonFirmaModal({  textButton, id }) {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <>
      <ButtonAzul
        text={textButton}
        onClick={openModal}
      />

      <Modal
        isOpen= {isModalOpen}
        onClose= {closeModal}
        title= {id}
      >
        <InputFirma onClose={closeModal} id={id}></InputFirma>
      </Modal>
    </>
  );
}
export default ButtonFirmaModal;

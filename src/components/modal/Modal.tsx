import { useState } from "react";
import { ButtonAzulLink } from "../basicos/ButtonAzul";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
}

const ModalComponent = ({ isOpen, onClose, children, title }: Props) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? "" : "hidden"}`}>
      <div className="fixed inset-0 bg-black opacity-75"></div>
      <div className="relative bg-white w-96 p-4 rounded shadow-lg">
       {children}
      </div>
    </div>
  );
};

export default ModalComponent;
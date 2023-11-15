import useDeviceSizeWindow from "@/utils/custom/useDeviseSizeWindow";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";



interface Props{ 
  isOpen: boolean
   onClose:()=> void
  children?: React.ReactNode;
  title?: string 
}
const ModalFirma = ({ isOpen, onClose, children, title }:Props) => {
  const {width,height} = useDeviceSizeWindow();
  
  if (!isOpen) return null;

  return (
    <section className="container-modal fixed z-50 flex items-center  justify-center bg-opacity-50 bg-black w-full h-screen max-h-max top-0 left-0 min-h-fit ">
      <div 
      style={{ height:
      height<350?'98%':
      width<600?`${width/1.4}px`: '90dvh',

      width: width>height*0.8?height<600?`${height*1.2}px`:`${height}px`:'97%',
      }}
      className={`modal bg-white rounded-lg overflow-hidden max-h-[30rem] relative max-w-5xl
      `}>
        <button
          onClick={onClose}
          className="close-button absolute top-1 right-2 text-gray-500 hover:text-gray-700"
        >
          <AiOutlineClose size={35}  />
        </button>

        <header className="bg-gray-800 text-white py-1 px-6 h-fit">
          <h1 className="text-2xl font-bold">{title}</h1>
        </header>
        <div className="w-auto h-full">{children}</div>
      </div>
    </section>
  );
};

export default ModalFirma;

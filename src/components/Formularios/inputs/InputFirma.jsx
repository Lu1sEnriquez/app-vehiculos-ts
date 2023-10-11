"use client";
import {useElementSize} from "@/app/utils/useElementSize";
import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import ButtonAzul from "../ButtonAzul";
import CreateImageFirmaURL from "@/app/utils/CreateImageFirmaURL";
import { useDatosSalidaReducer } from "@/app/context/salidasReducer";

function InputFirma({ id , onClose }) {
  const contentSignaturePad = useRef(null);
  const { width, height } = useElementSize(contentSignaturePad);

  const [firma, setFirma] = useState(null);
  const padId = `${id}-canvas`;
  const { state, dispatch } = useDatosSalidaReducer();
  function handleClearClick() {
    if (firma) {
      firma.clear();
    }
  }

  function handleSaveClick() {
    if (firma) {
      const imageDataURL = CreateImageFirmaURL(firma, "svg"); // svg || png
      // Guarda la imagen en una variable imageDataURL
      if (id == "vigilante") {
        dispatch({ type: "SET_FIRMA_VIGILANTE", payload:imageDataURL });
        
      } else if (id == "solicitante") {
        dispatch({ type: "SET_FIRMA_SOLICITANTE", payload: imageDataURL });
        
      }
      onClose()
    }
  }
  return (
    <div className="firma-container h-full  w-full   flex pb-10 flex-col ">
      <div
        className="signature-container h-1 grow w-full max-h-[30rem]  text-black border-2 "
        ref={contentSignaturePad}
      >
        <SignatureCanvas
          id={padId}
          penColor="black"
          className="signature-pad "
          dotSize={10}
          canvasProps={{ width: width - 2, height: height - 2, }}
          ref={(ref) => setFirma(ref)}
          
        />
      </div>

      <div className="w-full  flex flex-row gap-x-3 justify-end p-3   ">
        <ButtonAzul
          type="button"
          className="btn btn-clear"
          onClick={handleClearClick}
          text={"Limpiar"}
        />
        <ButtonAzul
          type="button"
          className="btn btn-save"
          onClick={handleSaveClick}
          text={"Guardar"}
        />
        <ButtonAzul
          type="button"
          className="btn btn-save"
          onClick={()=>{onClose()}}
          text={"CERRAR"}
        />
      </div>
    </div>
  );
}

export default InputFirma;

"use client";
import useElementSize from "@/utils/custom/useElementSize";
import React, { useRef, useState, MutableRefObject } from "react";
import SignatureCanvas from "react-signature-canvas";
import CreateImageFirmaURL from "@/utils/canvas/CreateImageFirmaURL";
import { useDatosSalidaReducer } from "@/reducer/salidasReducer";
import { ButtonAzul } from "@/components/basicos/ButtonAzul"; // Importa ButtonAzul desde el lugar correcto

function InputFirma({ id, onClose }: { id: string; onClose: () => void }) {
  const contentSignaturePad = useRef<HTMLDivElement | null>(null); // Define el tipo de referencia

  const [firma, setFirma] = useState<SignatureCanvas | null>(null); // Define el tipo de estado
  const padId: string = `${id}-canvas`;
  const { state, dispatch } = useDatosSalidaReducer();

  function handleClearClick() {
    if (firma) {
      firma.clear();
    }
  }

  function handleSaveClick() {
    if (firma) {
      const imageDataURL = CreateImageFirmaURL(firma, "png");
      if (id === "vigilante") {
        // Cambia '==' por '==='
        dispatch({ type: "SET_FIRMA_VIGILANTE", payload: imageDataURL });
      } else if (id === "solicitante") {
        // Cambia '==' por '==='
        dispatch({ type: "SET_FIRMA_SOLICITANTE", payload: imageDataURL });
      }
      onClose();
    }
  }

  const brushSettings = {
    color: "black",
    size: 20,
  };

  const { width, height } = useElementSize(contentSignaturePad);

  return (
    <div className="firma-container h-full w-full flex pb-10 flex-col">
      <div
        className="signature-container h-1 grow w-full max-h-[25rem] text-black border-2"
        ref={contentSignaturePad}
      >
        <SignatureCanvas
          ref={(ref: SignatureCanvas) => setFirma(ref)}
          clearOnResize={false}
          
          canvasProps={{   width: width - 2, height: height - 2, id: padId,  }}
        />
      </div>

      <div className="w-full flex flex-row gap-x-3 justify-end pb-2 pr-2">
        <ButtonAzul onClick={handleClearClick} text={"Limpiar"} />
        <ButtonAzul onClick={handleSaveClick} text={"Guardar"} />
      </div>
    </div>
  );
}

export default InputFirma;

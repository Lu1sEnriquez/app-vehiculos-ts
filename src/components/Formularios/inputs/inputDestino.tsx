"use client";
import React, {
  LegacyRef,
  MutableRefObject,
  useRef,
  useState,
  useEffect,
} from "react";
import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";
import LabelFormulario from "./LabelFormulario";

interface Props {
  destinoApartado?: string
}

function InputDestino({destinoApartado}:Props) {
  const LOCAL = "Navojoa";
  const FORANEO = "foraneo";
  const [destino, setDestino] = useState<string >(destinoApartado ||"");
  const [isLocal, SetIsLocal] = useState<boolean>(destino== LOCAL? true : false);
  
  
  
  const { dispatch, state } = useDatosSalidaLlegadaReducer();

  useEffect(() => {
    if (isLocal) {
      dispatch({ type: "SET_ISLOCAL", payload: isLocal });
    } else {
      dispatch({ type: "SET_ISLOCAL", payload: isLocal });
      dispatch({ type: "SET_DESTINO", payload: destino });
    }
  }, [destino, isLocal, dispatch]);


  const handleIsLocal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.value == LOCAL;
    SetIsLocal(isChecked);
    setDestino("");
  };

  const handleDestino = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValor = e.target.value
    setDestino(newValor);
    
  };

  return (
    <>
      <div>
        <LabelFormulario>{"Destino:"}</LabelFormulario>
        <label>
          <input
            type="radio"
            value={LOCAL}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleIsLocal(e);
            }}
            checked={isLocal}
          />
          {"  Navojoa"}
        </label>
        <br />
        <label>
          <input
            type="radio"
            value={FORANEO}
            onChange={handleIsLocal}
            checked={!isLocal}
          />
          {"  Foraneo"}
        </label>
      </div>
      {!isLocal && (
        <div className="animate-fade-down animate-duration-300 ">
          <label className="block text-gray-500 font-semibold mb-3">
            {"Ingresa el destino:"}
          </label>
          <input
            className="border  border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
             shadow-md shadow-gray-300
             "
            onChange={handleDestino}
            value={destino}
            type="text"
            id=""
            
          />
        </div>
      )}
    </>
  );
}

export default InputDestino;

'use client'
import { useEffect, useRef, useState } from "react";
import LabelFormulario from "../LabelFormulario"
import { useDatosSalidaReducer } from "@/reducer/salidasReducer";

function InputKilometraje() {
  const [kilometraje, setkilometraje] = useState("");
  const { datosState, dispatch } = useDatosSalidaReducer();
  
  const inputRef = useRef(null);
  
  
  const handleSetKilometraje = () => {
    setkilometraje(inputRef.current.value);
  };

  useEffect(()=>{ 
    dispatch({type: "SET_KILOMETRAJE", payload:kilometraje})
  },[kilometraje])



  return (
    <>
      <div className="w-60 sm:text-2xl ">
        
          <LabelFormulario>Kilometraje de Salida:</LabelFormulario>
            <input
              className="border border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              shadow-md shadow-gray-300
              "
              onChange={handleSetKilometraje}
              type="number"
              max={999999}
              
              ref={inputRef}
              id="Kilometraje"
            />
          
        
      </div>
      </>
  )
}
export default InputKilometraje
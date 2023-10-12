"use client";

import { useDatosSalidaReducer } from "@/app/context/salidasReducer";
import { useEffect, useReducer, useRef, useState } from "react";

function InputName({ text }) {
  const [name, setName] = useState("");
  const { datosState, dispatch } = useDatosSalidaReducer();
  const inputRef = useRef(null);
  
  const handleSetNombre = () => {
    setName(inputRef.current.value);
  };

useEffect(()=>{
  if(text.toLowerCase() .includes('vigilante')){
    dispatch({ type: 'SET_NOMBRE_VIGILANTE', payload: name });
  }
  else if(text.toLowerCase().includes('solicitante')){
    dispatch({ type: 'SET_NOMBRE_SOLICITANTE', payload: name });
  }


},[name])

  return (
    <>
      <div className="">
        <label className="block text-gray-500 font-semibold mb-3">{text}</label>
        <input
          className="border  border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              shadow-md shadow-gray-300
              "
          onChange={(e) => {
            handleSetNombre();
          }}
          value={name}
          type="text"
          id=""
          ref={inputRef}
        />
      </div>
    </>
  );
}
export default InputName;

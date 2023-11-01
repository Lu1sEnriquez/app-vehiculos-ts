"use client";

import { useDatosSalidaReducer } from "@/reducer/salidasReducer";
import React, { useEffect,  useState } from "react";

interface Props{
  text: string
}

function InputName({ text}: Props) {
  const [name, setName] = useState("");
  const { state, dispatch } = useDatosSalidaReducer();
 
  
  const handleSetNombre = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
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
          onChange={handleSetNombre}
          value={name}
          type="text"
          id=""
        />
      </div>
    </>
  );
}
export default InputName;

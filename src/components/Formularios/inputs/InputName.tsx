"use client";

import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";
import React, { useEffect,  useState } from "react";

interface Props{
  text: string
  type: "solicitante" | "vigilante"
}

function InputName({ type, text}: Props) {
  const [name, setName] = useState("");
  const { state, dispatch } = useDatosSalidaLlegadaReducer();
 
  
  const handleSetNombre = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };

useEffect(()=>{
  if(type == "vigilante"){
    dispatch({ type: 'SET_NOMBRE_VIGILANTE', payload: name });
  }
  else if(type == "solicitante"){
    dispatch({ type: 'SET_NOMBRE_SOLICITANTE', payload: name });
  }


},[name, dispatch, type])

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

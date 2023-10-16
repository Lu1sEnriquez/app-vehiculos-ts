'use client'

import { useEffect, useState } from "react";
import LabelFormulario from "../LabelFormulario";
import { useDatosSalidaReducer } from "@/reducer/salidasReducer";

function InputHora() {

  const [time, setTime] = useState("");
  

  const handleTimeChange = (evt) => {
    setTime(evt.target.value);
  };

  const {state, dispatch} = useDatosSalidaReducer();

useEffect(()=>{
  dispatch({type:"SET_HORA_SALIDA", payload: time})
},[time])

  return (
    <>
    <div className="w-full">
      <LabelFormulario>Fecha de Salida:</LabelFormulario>
      <input
        type="time"
        className="border bg-white border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
        shadow-md shadow-gray-300
        "
        onChange={handleTimeChange}
        value={time}
        id="hora"
      />
      </div>
    </>
  );
}
export default InputHora;

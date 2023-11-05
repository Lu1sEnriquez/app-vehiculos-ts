'use client'

import { useEffect, useState } from "react";
import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";
import LabelFormulario from "./LabelFormulario";

function InputHora() {
 
  // Obtiene la hora actual del dispositivo
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  // Formatea la hora actual en formato HH:mm:ss
  const formattedTime = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;

  
  const [time, setTime] = useState(formattedTime);
  

  const handleTimeChange = (evt:React.ChangeEvent<HTMLInputElement>) => {
    setTime(evt.target.value);
  };



  const { dispatch} = useDatosSalidaLlegadaReducer();
useEffect(()=>{
  dispatch({type:"SET_HORA_SALIDA", payload: time})
},[time,dispatch])






  return (
    <>
    <div className="w-full">
      <LabelFormulario>Hora Actual:</LabelFormulario>
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

"use client";
import { useEffect, useState } from "react";
import LabelFormulario from "../LabelFormulario";
import { useDatosSalidaReducer } from "@/app/context/salidasReducer";

const InputDate = () => {
  const [date, setDate] = useState("");
  const { state, dispatch } = useDatosSalidaReducer();
  const handleDateChange = (evt) => {
    setDate(evt.target.value);
   
  };

  useEffect(()=>{
    dispatch({ type: 'SET_FECHA_SALIDA', payload: date });
  },[date]);

  return (
    <>
      <div className="w-full">
        <LabelFormulario>Fecha de Salida:</LabelFormulario>
        <input
          id="dia"
          type="date"
          className="border bg-white border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
          shadow-md shadow-gray-300
          "
          onChange={handleDateChange}
          value={date}
        />
      </div>
    </>
  );
};

export default InputDate;

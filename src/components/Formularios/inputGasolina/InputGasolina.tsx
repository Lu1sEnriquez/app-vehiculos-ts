"use client";
import { ChangeEvent, useEffect, useState } from "react";
import UiGasolina from "./UiGasolina";
import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";
import LabelFormulario from "../inputs/LabelFormulario";

function InputGasolina() {
  const {dispatch, state} = useDatosSalidaLlegadaReducer();
  const [porcentaje, setPorcentaje] = useState(0);
  

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const nuevoPorcentaje = e.target.value;
    setPorcentaje(parseInt(nuevoPorcentaje));
    //console.log(porcentaje);
  };


useEffect(()=>{
  dispatch({type:"SET_PORCENTAJE_GASOLINA", payload: `${porcentaje}`})
},[porcentaje,dispatch])

  return (
    <section className="gasolina-container  flex flex-col justify-center items-center w-3/4 m-auto">
      <LabelFormulario>{"Medida de Gasolina:"}</LabelFormulario>
      <UiGasolina porcentaje={porcentaje} />

      <div className="mt-8 w-5/6">
        <input
          type="range"
          min="0"
          max="100"
          value={porcentaje}
          onChange={handleChange}
          className="w-full h-10 bg-gray-200 rounded-full appearance-none cursor-pointer "
        />
        <div className="flex justify-around mt-2 text-black">
          <span>E</span>
          <span>¼</span>
          <span>½</span>
          <span>¾</span>
          <span>F</span>
        </div>
      </div>
    </section>
  );
}
export default InputGasolina;

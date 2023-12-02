"use client";
import { ChangeEvent, useEffect, useState } from "react";
import UiGasolina from "./UiGasolina";
import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";
import LabelFormulario from "../inputs/LabelFormulario";

function InputGasolina() {
  const { dispatch, state } = useDatosSalidaLlegadaReducer();
  const [porcentaje, setPorcentaje] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nuevoPorcentaje = e.target.value;
    setPorcentaje(parseInt(nuevoPorcentaje));
    //console.log(porcentaje);
  };

  useEffect(() => {
    if (porcentaje != 0) {
      console.log("gasolina");
      
      dispatch({ type: "SET_TANQUE", payload: `${porcentaje}` });
    }
  }, [porcentaje, dispatch]);

  return (
    <section className="gasolina-container  flex flex-col justify-center items-center w-3/4 m-auto">
      <LabelFormulario>{"Medida de Gasolina:"}</LabelFormulario>
      <UiGasolina porcentaje={porcentaje} />

      <div className="mt-8 w-5/6">
        <input
          type="range"
          min="0"
          max="100"
          step={1}
         
          value={porcentaje}
          onChange={handleChange}
          className="appearance-none rounded-full h-7 bg-slate-200 w-full slider-thumb:appearance-none slider-thumb:w-10 slider-thumb:h-10 slider-thumb:border-none slider-thumb:bg-green-500 slider-thumb:shadow"
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

"use client";
import React, { useState } from "react";
import { CarroseriaUI } from "./CarroseriaUI";

import autoImage from "@/assets/icons/auto.png";
import LabelFormulario from "../inputs/LabelFormulario";
import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";

function InputCarroceria() {
  const [golpes, setGolpes] = useState(false);
  const { dispatch, state } = useDatosSalidaLlegadaReducer();
  function handleNo() {
    const golpes = false;
    setGolpes(golpes);
    dispatch({ type: "SET_TIENE_GOLPES", payload: golpes });
  }
  function handleSi() {
    const golpes = true;
    setGolpes(golpes);
    dispatch({ type: "SET_TIENE_GOLPES", payload: golpes });
  }

  return (
    <div id="container-inputCar">
      <div className="flex flex-col gap-2">
        <LabelFormulario>{"El Vehiculo Tiene Daños: "}</LabelFormulario>

        <label>
          <input
            type="radio"
            name="no"
            value={0}
            onChange={handleNo}
            checked={!golpes}
          />
          No
        </label>

        <label>
          <input
            type="radio"
            name="si"
            value={1}
            onChange={handleSi}
            checked={golpes}
          />
          Si
        </label>
      </div>
      {golpes && (
        <div className="animate-fade-down animate-duration-300">
          <LabelFormulario>
            {"Marca donde se encuentran los golpes: "}
          </LabelFormulario>
          <div className=" h-fit">
            <CarroseriaUI autoImage={autoImage}></CarroseriaUI>
          </div>
        </div>
      )}
    </div>
  );
}

export default InputCarroceria;

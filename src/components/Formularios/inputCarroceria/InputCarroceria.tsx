"use client";
import React, { useState } from "react";
import { CarroseriaUI } from "./CarroseriaUI";

import autoImage from "@/assets/icons/auto.png";
import LabelFormulario from "../LabelFormulario";

function InputCarroceria() {
  const [tieneGolpes, setTieneGolpes] = useState(true);

  const handleTieneGolpesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.value == "true";
    setTieneGolpes(isChecked);
  };

  return (
    <div id="container-inputCar" >
      <div className="flex flex-col gap-2">
        <LabelFormulario>{"El Vehiculo Tiene Daños: "}</LabelFormulario>

        <label>
          <input
            type="radio"
            name="daños"
            value={"false"}
            onChange={handleTieneGolpesChange}
            checked={tieneGolpes === false}
          />
          No
        </label>

        <label>
          <input
            type="radio"
            name="daños"
            value={"true"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleTieneGolpesChange(e);
            }}
            checked={tieneGolpes === true}
          />
          Si
        </label>
      </div>
      {tieneGolpes && (
        <>
          <LabelFormulario>
            {"Marca donde se encuentran los golpes: "}
          </LabelFormulario>
          <div className=" h-fit">
            <CarroseriaUI autoImage={autoImage}></CarroseriaUI>
          </div>
        </>
      )}
    </div>
  );
}

export default InputCarroceria;

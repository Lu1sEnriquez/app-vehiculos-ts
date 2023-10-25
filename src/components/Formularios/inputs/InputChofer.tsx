'use client'
import React, { useEffect, useState } from "react";
import LabelFormulario from "../LabelFormulario";
import { useDatosSalidaReducer } from "@/reducer/salidasReducer";

function InputChofer() {
  const [isChofer, setIsChofer] = useState(false);
  const [chofer, setchofer] = useState("");

  function handleTieneChofer(e: React.ChangeEvent<HTMLInputElement>) {
    const isChecked = e.target.value == "true";
    setIsChofer(isChecked);
  }
  const handleChofer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValor = e.target.value
    setchofer(newValor);
    
  };
const {dispatch, state} = useDatosSalidaReducer();
  useEffect(() => {
    if (isChofer) {
      dispatch({ type: "SET_ISLOCAL", payload: isChofer });
    } else {
      dispatch({ type: "SET_NOMBRE_CHOFER", payload: chofer });
    }
  }, [isChofer,chofer, dispatch]);

  return (
    <>
      <div className="flex flex-col gap-2">
        <LabelFormulario>{"su viaje tendra Chofer: "}</LabelFormulario>

        <label>
          <input
            type="radio"
            name="chofer"
            value={"false"}
            onChange={handleTieneChofer}
            checked={isChofer === false}
          />
          No
        </label>

        <label>
          <input
            type="radio"
            name="chofer"
            value={"true"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleTieneChofer(e);
            }}
            checked={isChofer === true}
          />
          Si
        </label>
      </div>
      {isChofer && (
        <div className="">
          <label className="block text-gray-500 font-semibold mb-3">
            {"Ingresa nombre del Chofer:"}
          </label>
          <input
            className="border  border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
          shadow-md shadow-gray-300
          "
            onChange={handleChofer}
            value={chofer}
            type="text"
            id=""
          />
        </div>
      )}
    </>
  );
}

export default InputChofer;

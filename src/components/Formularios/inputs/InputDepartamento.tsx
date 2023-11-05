"use client";

import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";
import React, { useEffect, useState } from "react";

interface Props {
  children?: React.ReactNode;
}

function InputDepartamento({ children }: Props) {
  const [departamento, setDepartamento] = useState("");
  const { state, dispatch } = useDatosSalidaLlegadaReducer();

  const handleSetDepartamento = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setDepartamento(evt.target.value);
  };

  useEffect(() => {
    dispatch({ type: "SET_DEPARTAMENTO", payload: departamento });
  }, [departamento, dispatch]);

  return (
    <>
      <div className="">
        <label className="block text-gray-500 font-semibold mb-3">Departamento :</label>
        <input
          className="border  border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              shadow-md shadow-gray-300
              "
          onChange={handleSetDepartamento}
          value={departamento}
          type="text"
          id=""
        />
      </div>
    </>
  );
}
export default InputDepartamento;

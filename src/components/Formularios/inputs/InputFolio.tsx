"use client";

import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";
import React, { useEffect, useState } from "react";

interface Props {
  children?: React.ReactNode;
}

function InputFolio({ children }: Props) {
  const [idSolicitud, setIdSolicitud] = useState(0);
  const { dispatch } = useDatosSalidaLlegadaReducer();

  const handleSetDepartamento = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setIdSolicitud(parseInt(evt.target.value));
  };

  useEffect(() => {
    dispatch({ type: "SET_IDSOLICITUD", payload: idSolicitud });
  }, [idSolicitud, dispatch]);

  return (
    <>
      <div className="">
        <label className="block text-gray-500 font-semibold mb-3">Folio :</label>
        <input
          className="border  w-1/2 border-slate-600 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              shadow-md shadow-gray-300
              "
          onChange={handleSetDepartamento}
          value={idSolicitud}
          type="number"
          id=""
        />
      </div>
    </>
  );
}
export default InputFolio;
'use client'
import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";
import { ChangeEvent, useEffect, useState } from "react";
import LabelFormulario from "./LabelFormulario";

function InputLicencia() {
  const [licencia, setLicencia] = useState("");
  const {  dispatch } = useDatosSalidaLlegadaReducer();
  
  const handleSetLicencia = (e:ChangeEvent<HTMLInputElement>) => {
    setLicencia(e.target.value);
  };

useEffect(()=>{
dispatch({type:'SET_LICENCIA', payload:licencia})  
},[licencia, dispatch])

  return (
    <>
      <div className="">
        <LabelFormulario>{'Licencia Conductor :'}</LabelFormulario>
        <input
          className="border  border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              shadow-md shadow-gray-300
              "
          onChange={handleSetLicencia}
          value={licencia}
          type="text"
          id=""
        />
      </div>
    </>
  );
}
export default InputLicencia;

'use client'
import { ChangeEvent, useEffect, useRef, useState } from "react";
import LabelFormulario from "./LabelFormulario";
import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";

function InputKilometraje() {
  const [kilometraje, setkilometraje] = useState(0);
  const { state, dispatch } = useDatosSalidaLlegadaReducer();
  
  const inputRef = useRef(null);
  
  
  const handleSetKilometraje = (e:ChangeEvent<HTMLInputElement>) => {
    setkilometraje(parseInt(e.target.value));
  };

  useEffect(()=>{ 
    if(kilometraje != 0){
      dispatch({type: "SET_KILOMETRAJE", payload:`${kilometraje}`})
    }
  },[kilometraje, dispatch])



  return (
    <>
      <div className="w-60  ">
        
          <LabelFormulario>Kilometraje: </LabelFormulario>
            <input
              className="border border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              shadow-md shadow-gray-300
              "
              onChange={handleSetKilometraje}
              type="number"
              max={999999}
              
              ref={inputRef}
              id="Kilometraje"
            />
          
        
      </div>
      </>
  )
}
export default InputKilometraje
"use client"
import React, { LegacyRef, MutableRefObject, useRef, useState, useEffect } from 'react'
import LabelFormulario from '../LabelFormulario';
import { useDatosSalidaReducer } from '@/app/context/salidasReducer';

function InputDestino() {
  const LOCAL = "local"
  const FORANEO = "foraneo"
  const [isLocal, SetIsLocal] = useState<boolean>(false);
  const [destino, setDestino] = useState<string>("");

  const { dispatch, state} = useDatosSalidaReducer();

  useEffect(() => {
    if(isLocal){
       
      dispatch({type:'SET_DESTINO', payload:"LOCAL" })
    }else{
      dispatch({type:'SET_DESTINO', payload:destino })

    }
  
    
  }, [destino, isLocal])
  

  const inputDestinoRef = useRef<HTMLInputElement | null>(null);

  const handleIsLocal = (e:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.value ==LOCAL;
    SetIsLocal(isChecked);
    setDestino("")
  };


  const handleDestino =()=>{
    if(inputDestinoRef.current){
      
    const value = 
    setDestino(inputDestinoRef.current.value)
    }
  }

  
 

  return (
    <>
    <div>
      <LabelFormulario>{"Destino:"}</LabelFormulario>
      <label>
        <input
          type="radio"
          
          value={LOCAL}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleIsLocal(e)}}
          checked={isLocal}
        />
          {"  Local"}
      </label>
      <br />
      <label>
        <input
          type="radio"
          
          value={FORANEO}
          onChange={handleIsLocal}
          checked={!isLocal}
        />
        {"  Foraneo"}
      </label>
      
    </div>
    {!isLocal && 
       <div className="">
       <label className="block text-gray-500 font-semibold mb-3">{"Ingresa el destino:"}</label>
       <input
         className="border  border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
             shadow-md shadow-gray-300
             "
         onChange={(e) => {
           handleDestino();
         }}
         value={destino}
         type="text"
         id=""
         ref={inputDestinoRef}
       />
     </div>
      }
   </>
  )
}

export default InputDestino;
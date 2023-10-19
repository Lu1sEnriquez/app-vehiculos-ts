'use client'
import { useDatosSalidaReducer } from '@/reducer/salidasReducer';
import useElementSize from '@/utils/custom/useElementSize';
import React,{ChangeEvent, useEffect, useRef, useState} from 'react'

function InputObservaciones() {
    const [observacion, setObservacion] = useState<string>('');

    const handleObservacionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setObservacion(e.target.value);
    };
    
    const {dispatch}= useDatosSalidaReducer();
    const containerObservacionesRef = useRef(null)

    useEffect(()=>{
        dispatch({type: "SET_OBSERVACIONES", payload: observacion})
    },[observacion])
    
    const {width,height} = useElementSize(containerObservacionesRef);
     
    
    return (
      <div className=" grow mb-2  h-fit pb-10" 
      ref={containerObservacionesRef}
      >
        <label className="block font-bold" htmlFor="observacion">
          Observaciones:
        </label>
        <textarea
          id="observacion"
          name="observacion"
          className={`w-full h-full sm p-2 border-2 rounded border-black  
          ${width<288?'h-52':''}`}
          placeholder="Escribe tus observaciones aquí"
          value={observacion}
          onChange={handleObservacionChange}
        ></textarea>
      </div>
    );
}

export default InputObservaciones
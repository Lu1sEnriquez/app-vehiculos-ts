'use client'
import React,{useEffect} from 'react'
import LabelFormulario from './LabelFormulario'
import { useDatosSalidaLlegadaReducer } from '@/reducer/salidaLlegadaReducer';


interface Props{
    folio: number
}
function MostrarFolio({folio}:Props) {

  const { state, dispatch } = useDatosSalidaLlegadaReducer();
  useEffect(() => {
    dispatch({ type: "SET_IDSOLICITUD", payload: folio });
  }, [folio, dispatch]);

  return (
    <LabelFormulario>
        <h6 className='font-bold'>Folio: </h6>{folio}
    </LabelFormulario>
  )
}

export default MostrarFolio
import React from 'react'
import ButtonAzul from '../Formularios/ButtonAzul'
import { useDatosSalidaContext } from '@/app/context/salidasReducer';
import generarPDF from '@/app/utils/PDF/generarPDF';

function ButtonGenerarPDF({data}) {
  const { state, dispatch } = useDatosSalidaContext();
  const handleGenerar =()=>{
    generarPDF(state)
  }
    
  return (

        <ButtonAzul onClick={handleGenerar()} text={"generar PDF"}></ButtonAzul>
  )
}

export default ButtonGenerarPDF
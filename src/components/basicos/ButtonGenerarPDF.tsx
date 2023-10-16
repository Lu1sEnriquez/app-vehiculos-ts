'use client'
import React from 'react'
import {ButtonAzul} from '@/components/basicos/ButtonAzul'
import GenerarPDF from '@/utils/PDF/generarPDF';
import {datosSalidaEntradaType, useDatosSalidaReducer} from "@/reducer/salidasReducer"
import imgCar from "@/assets/icons/auto.png"

function ButtonGenerarPDF() {
  const {state} = useDatosSalidaReducer()
  const handleGenerar =()=>{
    GenerarPDF(state,imgCar)
  }
    
  return (

        <ButtonAzul onClick={handleGenerar} text={"generar PDF"}></ButtonAzul>
  )
}

export default ButtonGenerarPDF
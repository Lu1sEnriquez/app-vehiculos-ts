'use client'
import {useMemo} from 'react'
import {ButtonAzul} from '@/components/basicos/ButtonAzul'
import {GenerarPDF} from '@/utils/PDF/generarReporteEntradaSalidaPDF';
import { useDatosSalidaEntradaReducer } from '@/reducer/salidaEntradaReducer';

function ButtonGenerarPDF() {

  const {state} = useDatosSalidaEntradaReducer()

  const handleGenerar =useMemo(()=>{
    return ()=>{
      GenerarPDF(state)
  };
  },[state]);
    
  return (

        <ButtonAzul onClick={handleGenerar} text={"generar PDF"}></ButtonAzul>
  )
}

export default ButtonGenerarPDF
'use client'
import {useMemo} from 'react'
import {ButtonAzul} from '@/components/basicos/ButtonAzul'
import {GenerarPDF} from '@/utils/PDF/ReporteEntradaSalida/generarReporteEntradaSalidaPDF';
import {GrDocumentPdf} from "react-icons/gr"

import { ButtonRojo } from './ButtonRojo';
import { datosSalidaLlegada } from '@/models/DatosSalidaLlegada';
function ButtonGenerarPDF({id}:{id: number}) {

  
  
  const handleGenerar =useMemo(()=>{
    return ()=>{
      const data= datosSalidaLlegada.find(item => item.idSolicitud == id)
      console.log(data);
      
      if(data){
        GenerarPDF(data)
      }
  };
  },[id]);
    
  return (

        <ButtonRojo onClick={handleGenerar} >
          <GrDocumentPdf size={20}></GrDocumentPdf>
        </ButtonRojo>
  )
}

export default ButtonGenerarPDF
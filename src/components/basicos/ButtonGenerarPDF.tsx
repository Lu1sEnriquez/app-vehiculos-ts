'use client'
import {ButtonAzul} from '@/components/basicos/ButtonAzul'
import {GenerarEntradaSalidaPDF} from '@/utils/PDF/ReporteEntradaSalida/generarReporteEntradaSalidaPDF';
import {GrDocumentPdf} from "react-icons/gr"

import { ButtonRojo } from './ButtonRojo';
import { reportesGetById } from '@/services/reportes.services';
function ButtonGenerarPDF({id}:{id: number}) {

  async function handleData() {
    const data =await reportesGetById(id)
    console.log(data);
    await GenerarEntradaSalidaPDF(data)
  }

   function handleGenerar() {
    handleData()
  }
 
    
  return (
        <button onClick={handleGenerar}  className='p-4'>
          <GrDocumentPdf size={20}></GrDocumentPdf>
        </button>
  )
}

export default ButtonGenerarPDF
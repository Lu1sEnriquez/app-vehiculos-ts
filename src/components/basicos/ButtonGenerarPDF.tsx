'use client'
import {ButtonAzul} from '@/components/basicos/ButtonAzul'
import {GenerarEntradaSalidaPDF} from '@/utils/PDF/ReporteEntradaSalida/generarReporteEntradaSalidaPDF';
import {GrDocumentPdf} from "react-icons/gr"
import { FcFile } from "react-icons/fc";

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
        <button onClick={handleGenerar}  className='p-3 m-2 rounded-full hover:bg-azulNormal opacity-80 duration-200 shadow-xl'>
          <FcFile size={20}></FcFile>
        </button>
  )
}

export default ButtonGenerarPDF
'use client'
import {ButtonAzul} from '@/components/basicos/ButtonAzul'
import {GenerarEntradaSalidaPDF} from '@/utils/PDF/ReporteEntradaSalida/generarReporteEntradaSalidaPDF';
import {GrDocumentPdf} from "react-icons/gr"
import { FcFile } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";

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
        <button onClick={handleGenerar}  className='p-1  rounded-full hover:bg-azulTurquesa hover:scale-110 opacity-80 duration-100 shadow-slate-800 '>
          <FcDocument size={30}></FcDocument>
        </button>
  )
}

export default ButtonGenerarPDF
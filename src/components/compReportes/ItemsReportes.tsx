'use client'

import {useState, useEffect} from 'react'
import ApartadosType from '@/models/ReporteGeneralType'
import ItemReporte from './ItemReporte';
import useReportes from '@/hooks/useReportes';
import DataType from '@/models/DataType';

function ItemsReportes() {
const [reportes, setReportes] = useState<ApartadosType[]>([])
const {reportesGeneralGet} = useReportes()


useEffect(() => {
 reportesGeneralGet().then((response )=>{
  console.log(response);
  if(response ){
    setReportes(response)
  }
 })

},[])



  return (
    <section
        id="contenedorApartados"
        className="w-full h-screen flex flex-col gap-5 mt-5 pl-14 "
      >
        {reportes.length>0 && reportes.map(solicitud =>{
          return(
            <ItemReporte key={solicitud.idSolicitud} solicitud={solicitud} />
          )
        })}
      </section>
  )
}

export default ItemsReportes;
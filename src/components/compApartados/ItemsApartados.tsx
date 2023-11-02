import { solicitudes } from '@/models/ReporteGeneralType'
import React from 'react'
import ItemApartado from './ItemApartado';

function ItemsApartados() {
const data = solicitudes;
  return (
    <section
        id="contenedorApartados"
        className="w-full h-screen flex flex-col gap-5 mt-5"
      >
        {data.map(solicitud =>{
          return(
            <ItemApartado key={solicitud.idSolicitud} solicitud={solicitud} />
          )
        })}
      </section>
  )
}

export default ItemsApartados
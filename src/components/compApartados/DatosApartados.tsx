import { solicitudes } from '@/models/SolicitudApartadoType'
import React from 'react'
import ItemApartados from './ItemApartados';

function DatosApartados() {
const data = solicitudes;
  return (
    <section
        id="contenedorApartados"
        className="w-full h-screen flex flex-col gap-5 mt-5 pl-14 "
      >
        {data.map(solicitud =>{
          return(
            <ItemApartados key={solicitud.idSolicitud} solicitud={solicitud} />
          )
        })}
      </section>
  )
}

export default DatosApartados
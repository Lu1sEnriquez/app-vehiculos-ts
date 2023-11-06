"use client";
import ApartadosType, { solicitudes } from "@/models/ReporteGeneralType";
import React, { useEffect, useState } from "react";
import ItemLlegada from "./ItemLlegada";
import { apartadosGet } from "@/services/reportes.services";

function ItemsLlegadas() {
  const [data, setData] = useState<ApartadosType[]>([]);

  useEffect(() => {
    apartadosGet().then(response =>{
     console.log('respuesta ', response);
      if(Array.isArray(response)){
        setData(response)
      }
    })
   }, []);
 
  return (
    <section className="items-center font-nunito-sans text-xs sm:text-base font-bold w-full flex flex-wrap  gap-5 justify-center  mt-10  border-2 h-full ">
      {
        data.filter(solicitud => solicitud.estado =="Circulacion" ).map((solicitud) => {
            return <ItemLlegada key={solicitud.idSolicitud} solicitud={solicitud} />;
          })
      }
    </section>
  );
}

export default ItemsLlegadas;

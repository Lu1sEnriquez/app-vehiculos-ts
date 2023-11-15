"use client";
import ApartadosType, { solicitudes } from "@/models/ReporteGeneralType";
import React, { useEffect, useState } from "react";
import ItemSalida from "./ItemSalida";
import { apartadosGet } from "@/services/apartados.services";

function ItemsSalida() {
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
    <section className="items-center font-nunito-sans text-xs sm:text-base font-bold w-full flex flex-wrap  gap-5 justify-center  mt-10  
     py-6 
     h-full ">
      {
        data.filter(solicitud => solicitud.estado == "Pendiente").map((solicitud) => {
            return <ItemSalida key={solicitud.idSolicitud} solicitud={solicitud} />;
          })
      }
    </section>
  );
}

export default ItemsSalida;

"use client";
import ApartadosType from "@/models/ReporteGeneralType";
import React, { useEffect, useState } from "react";
import ItemApartado from "./ItemApartado";
import { apartadosGet } from "@/services/apartados.services";

function ItemsApartados() {
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
    <section className=" font-nunito-sans text-xs sm:text-base font-bold w-full flex flex-wrap gap-5 justify-center m-auto   mt-10 px-2  ">
      
                            {/* esta organizado por la 4 letra del estado = Fin "a" lizado , Cir "c" ulacion , Pen "d" iente  "a","c","d"  */}
      {data.sort((a, b)=>  a.estado.charCodeAt(3) - b.estado.charCodeAt(3) ).map((solicitud, index)  => {
        return <ItemApartado key={index} solicitud={solicitud} />;
      })}
    </section>
  );
}

export default ItemsApartados;

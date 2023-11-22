"use client";
import ApartadosType from "@/models/ReporteGeneralType";
import React, { useEffect, useState } from "react";
import ItemLlegada from "./ItemLlegada";
import { apartadosGet } from "@/services/apartados.services";
import { FaCarOn } from "react-icons/fa6";
function ItemsLlegadas() {
  const [data, setData] = useState<ApartadosType[]>([]);

  useEffect(() => {
    apartadosGet().then((response) => {
      console.log("respuesta ", response);
      if (Array.isArray(response)) {
        setData(
          response.filter((solicitud) => solicitud.estado == "Circulacion")
        );
      }
    });
  }, []);

  return (
    <section className=" font-nunito-sans text-xs sm:text-base font-bold w-full flex flex-wrap gap-5 justify-center m-auto  mt-10 px-2 ">
      {data.length > 0 ? (
        data.map((solicitud) => {
          return (
            <ItemLlegada key={solicitud.idSolicitud} solicitud={solicitud} />
          );
        })
      ) : (
        <div className="font-poppins text-5xl text-slate-500 flex  flex-col items-center gap-2">
          <span>NO EXISTEN AUTOS FUERA</span>
          <FaCarOn size={50}/>
        </div>
      )}
    </section>
  );
}

export default ItemsLlegadas;

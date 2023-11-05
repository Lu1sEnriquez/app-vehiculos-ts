"use client";
import ReporteGeneralType, { solicitudes } from "@/models/ReporteGeneralType";
import React, { useEffect, useState } from "react";
import ItemApartado from "./ItemApartado";

function ItemsApartados() {
  const [data, setData] = useState<ReporteGeneralType[]>([]);

  useEffect(() => {
    const data = solicitudes;
    setData(data);
  }, []);

  return (
    <>
    <div className="w-full lg:w-3/4 bg-slate-400 h-20">

    </div>


      <table
        id="contenedorApartados"
        className="w-full lg:w-3/4 p-2 h-screen  text-xs sm:text-sm md:text-base font-Nunito text-black flex flex-col  gap-5 md:mt-5 mt-16"
      >
        <thead className="bg-azulMarino text-slate-50 flex w-full rounded-sm shadow-xl">
          <tr className="flex flex-row items-center w-full justify-between p-0 md:px-10">
            <th className="px-1   py-2 font-semibold  ">
              Folio
            </th>
            <th className="px-1   py-2 font-semibold">Solicitante</th>
            <th className="px-1   py-2 font-semibold  hidden md:visible">
              Chofer
            </th>
            <th className="px-1   py-2 font-semibold">Destino</th>
            <th className="px-1   py-2 font-semibold">Vehiculo</th>
            <th className="px-1   py-2 font-semibold  hidden md:visible">
              Placa
            </th>
            <th className="px-1   py-2 font-semibold hidden md:visible">
              Placa
            </th>
            <th className="px-1   py-2 font-semibold flex flex-wrap">
              Fecha Salida
            </th>
            <th className="px-1   py-2 font-semibold flex flex-wrap">
              Fecha Llegada
            </th>
            <th className="px-1   py-2 font-semibold ">PDF</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {data.map((solicitud) => {
            return (
              <ItemApartado key={solicitud.idSolicitud} solicitud={solicitud} />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ItemsApartados;

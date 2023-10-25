"use client";

import { datosSalidaType, useDatosSalidaReducer } from "@/reducer/salidasReducer";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import autoImage from "@/assets/icons/auto.png";

import MostrarAuto from "@/components/Formularios/inputCarroceria/MostrarAuto";
import html2canvas from "html2canvas";
import { ComponentToImage } from "@/utils/canvas/ComponentToImage";
function MostrarDatosSalida() {
  // Utiliza el hook useDatosSalida para acceder al estado del contexto
  const { state, dispatch } = useDatosSalidaReducer();

  // Utiliza el estado local para almacenar los datos del contexto
  const [data, setDatos] = useState<datosSalidaType>(state);
  const containerAutoRef = useRef(null);
  // Actualiza los datos locales cuando cambie el estado del contexto
  useEffect(() => {
    setDatos(state);
  }, [state, state.accesorios]);


   

  return (
    <div className=" m-10 ">
      <h1>Datos de Salida</h1>
      <p>Folio: {data.idSolicitud}</p>
      <p>Fecha de Salida: {data.fechaSalida}</p>
      <p>Nombre del Solicitante: {data.nombreSolicitante}</p>
      <p>Nombre del Chofer: {data.nombreChofer}</p>
      <p>Placas del Vehículo: {data.placa}</p>
      <p>Hora de Salida: {data.horaSalida}</p>
      <p>Kilometraje: {data.kilometraje}</p>
      <ul>
        <li>Carrocería:</li>
        <div ref={containerAutoRef} className="w-1/2  relative">
          <MostrarAuto
            autoImage={autoImage}
            coordenadas={data.carroceria}
          ></MostrarAuto>
        </div>
        <ul>
          <li> equises:</li>
          <ul></ul>
        </ul>
      </ul>

      <p>Nombre del Vigilante: {data.nombreVigilante}</p>
      <p>Firma del Vigilante: </p>
      {data.firmaVigilante && (
        <Image
          key={1}
          className="border-2 border-red-500"
          src={data?.firmaVigilante}
          width={200}
          height={200}
          alt="otra firma"
        ></Image>
      )}
      <p>Firma del Solicitante: </p>
      {data.firmaSolicitante && (
        <Image
          key={2}
          className="border-2 border-red-500"
          src={data?.firmaSolicitante}
          width={200}
          height={200}
          alt="firma"
        ></Image>
      )}
      <p>Porcentaje de Gasolina: {data.porcentajeGasolina}</p>
      <div>
      </div>
      <p>Destino: {data.destino}</p>
      <p>Accesorios:</p>
      <ul className="text-black">
        <li>Gato: {data.accesorios.gato ? "si" : "no"}</li>
        <li>Extra: {data.accesorios.extra ? "si" : "no"}</li>
        <li>Cables: {data.accesorios.cables ? "si" : "no"}</li>
        <li>Luz Muerta: {data.accesorios.luzMuerta ? "si" : "no"}</li>
        <li>Extintor: {data.accesorios.extintor ? "si" : "no"}</li>
        <li>Documentos: {data.accesorios.documentos ? "si" : "no"}</li>
      </ul>
      <ul>
        <h1 className="font-bold">Observaciones</h1>
        <p>{data.observaciones}</p>
      </ul>
    </div>
  );
}

export default MostrarDatosSalida;

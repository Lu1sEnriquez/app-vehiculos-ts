"use client";
import { useDatosSalidaReducer } from "@/app/context/salidasReducer";
import React, { useEffect, useRef, useState } from "react";
import ButtonAzul from "../Formularios/ButtonAzul";
import Image from "next/image";
import autoImage from "@/assets/icons/auto.png";

import MostrarAuto from '@/components/Formularios/inputCarroceria/MostrarAuto'
function MostrarDatosSalida() {
  // Utiliza el hook useDatosSalida para acceder al estado del contexto
  const { state, dispatch } = useDatosSalidaReducer();

  // Utiliza el estado local para almacenar los datos del contexto
  const [data, setDatos] = useState(state);
  const containerAutoRef = useRef(null)
  // Actualiza los datos locales cuando cambie el estado del contexto
  useEffect(() => {
    setDatos(state);
  }, [state]);

  // Accede a los datos específicos del estado
  //   const { folio, fechaSalida, nombreUsuario, placas,horaSalida,kilometraje
  //  ,carroceria,porcentajeGasolina,nombreVigilante,firmaVigilante,firmaUsuario
  // ,destino,accesorios} = state;


  return (
    <div className=" ml-10" >
      <h1>Datos de Salida</h1>
      <p>Folio: {data.folio}</p>
      <p>Fecha de Salida: {data.fechaSalida}</p>
      <p>Nombre del Solicitante: {data.nombreSolicitante}</p>
      <p>Placas del Vehículo: {data.placa}</p>
      <p>Hora de Salida: {data.horaSalida}</p>
      <p>Kilometraje: {data.kilometraje}</p>
      <ul>
        <li>Carrocería:</li>
       <div ref={containerAutoRef} className="w-1/2  relative">
       <MostrarAuto autoImage={autoImage} coordenadas={data.carroceria } ></MostrarAuto>
       </div>
        <ul>
          <li> equises:</li>
          <ul>
            
          </ul>
        </ul>
      </ul>

      <p>Porcentaje de Gasolina: {data.porcentajeGasolina}</p>
      <p>Nombre del Vigilante: {data.nombreVigilante}</p>
      <p>Firma del Vigilante: </p>
      {data.firmaVigilante && (
        <Image
        key={1}
          className="border-2 border-red-500"
          src={data?.firmaVigilante}
          width={500}
          height={300}
          alt="otra firma"
        ></Image>
      )}
      <p>Firma del Solicitante: </p>
      {data.firmaSolicitante && (
        <Image
        

          className="border-2 border-red-500"
          src={data?.firmaSolicitante}
          width={300}
          height={150}
          alt="firma"
        ></Image>
      )}

      <p>Destino: {data.destino}</p>
      <p>Accesorios:</p>
      <ul>
        <li>Gato: {data.accesorios.gato}</li>
        <li>Extra: {data.accesorios.extra}</li>
        <li>Cables: {data.accesorios.cables}</li>
        <li>Luz Muerta: {data.accesorios.luzMuerta}</li>
        <li>Extintor: {data.accesorios.extintor}</li>
        <li>Documentos: {data.accesorios.documentos}</li>
      </ul>
    </div>
  );
}

export default MostrarDatosSalida;

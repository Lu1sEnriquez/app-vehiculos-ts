"use client";

import { useDatosSalidaReducer } from "@/app/context/salidasReducer";
import React, { useEffect, useRef, useState } from "react";
import ButtonAzul from "../Formularios/ButtonAzul";
import Image from "next/image";
import autoImage from "@/assets/icons/auto.png";

import MostrarAuto from '@/components/Formularios/inputCarroceria/MostrarAuto'
import html2canvas from "html2canvas";
import { ComponentToImage } from "@/app/utils/useCustom/ComponentToImage";
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
  useEffect(() => {
    const loadImage = async () => {
      try {
       ComponentToImage(data.marcadorGasolina).then( img => marcadorRef.current.src = img)
        
      } catch (error) {
        // Maneja el error aquí si es necesario
        console.error("Error al cargar la imagen:", error);
      }
    };
  
    loadImage();
  }, [data.porcentajeGasolina]);

const marcadorRef = useRef(null)
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
  <Image ref={marcadorRef} width={200} height={200}></Image>
</div>
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

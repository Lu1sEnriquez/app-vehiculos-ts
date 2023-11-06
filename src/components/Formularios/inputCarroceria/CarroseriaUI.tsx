"use client";
import React, { useState, useRef, useEffect, MutableRefObject } from "react";
import Image from "next/image";
import { ButtonAzul } from "@/components/basicos/ButtonAzul";
import useElementSize from "@/utils/custom/useElementSize";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import CoordenadasType from "@/models/CoordenadasType";
import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";
import { ButtonRojo } from "@/components/basicos/ButtonRojo";

export function drawMarks(
  canvasRef: MutableRefObject<HTMLCanvasElement | null>,
  coordenadas: CoordenadasType[],
  imagen: MutableRefObject<HTMLImageElement | null>
) {
  const ctx = canvasRef.current?.getContext("2d");

  if (ctx && coordenadas && imagen.current) {
    ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;

    coordenadas.forEach((marca) => {
      if (imagen.current) {
        const newCoordenadas = redimensionarCoordenada(
          marca,
          Number(marca.width),
          Number(marca.height),
          imagen.current.width,
          imagen.current.height
        );

        if (newCoordenadas.x && newCoordenadas.y) {
          ctx.beginPath();
          ctx.moveTo(newCoordenadas.x - 10, newCoordenadas.y - 10);
          ctx.lineTo(newCoordenadas.x + 10, newCoordenadas.y + 10);
          ctx.moveTo(newCoordenadas.x - 10, newCoordenadas.y + 10);
          ctx.lineTo(newCoordenadas.x + 10, newCoordenadas.y - 10);
          ctx.stroke();
        }
      }
    });
  }
}

export function redimensionarCoordenada(
  coordenada: CoordenadasType,
  originalWidth: number,
  originalHeight: number,
  newWidth: number,
  newHeight: number
): { x: any; y: any } {
  if (originalWidth && originalHeight && newWidth && newHeight) {
    const xRatio = newWidth / originalWidth;
    const yRatio = newHeight / originalHeight;

    const newX = coordenada.x !== null ? Number(coordenada.x) * xRatio : null;
    const newY = coordenada.y !== null ? Number(coordenada.y) * yRatio : null;

    return { x: newX, y: newY };
  }
  return coordenada;
}

export function CarroseriaUI({
  autoImage,
}: {
  autoImage: string | StaticImport;
}) {
  const initialStateCoordenadas: CoordenadasType[] = [];

  const [coordenadas, setCoordenadas] = useState<CoordenadasType[]>(
    initialStateCoordenadas
  );

  const autoRef = useRef<HTMLImageElement | null>(null);

  const { width, height } = useElementSize(autoRef);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  autoRef;

  const [mode, setMode] = useState<boolean>(true);

  const { dispatch, state } = useDatosSalidaLlegadaReducer();

  useEffect(() => {
    drawMarks(canvasRef, coordenadas, autoRef);
    if (coordenadas && autoRef.current) {
      dispatch({ type: "SET_CARROCERIA", payload: coordenadas });
    }
  }, [coordenadas, autoRef.current, height, width]);

  function addMark(event: React.MouseEvent<HTMLCanvasElement>) {
    const rect = canvasRef.current!.getBoundingClientRect();
    const x: number = event.clientX - rect.left;
    const y: number = event.clientY - rect.top;
    setCoordenadas((coordenadasAnteriores: CoordenadasType[]) => [
      ...coordenadasAnteriores,
      { x, y, width: width, height: height },
    ]);
  }

  function removeMark(event: React.MouseEvent<HTMLCanvasElement>) {
    const rect = canvasRef.current!.getBoundingClientRect();
    const x: number = event.clientX - rect.left;
    const y: number = event.clientY - rect.top;

    setCoordenadas((coordenadasAnteriores: CoordenadasType[]) =>
      coordenadasAnteriores.filter((marca) => {
        const newCoordenadas = redimensionarCoordenada(
          marca,
          Number(marca.width),
          Number(marca.height),
          autoRef.current!.width,
          autoRef.current!.height
        );
        const distance = Math.sqrt(
          (x - Number(newCoordenadas.x)) ** 2 +
            (y - Number(newCoordenadas.y)) ** 2
        );
        return distance >= 10; // Puedes ajustar este valor según tus necesidades
      })
    );
  }

  function clearMarks() {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      setCoordenadas([]);
      ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
    }
  }

  function handleAgregar() {
    setMode(true);
  }

  function handleEliminar() {
    setMode(false);
  }

  function handleCanvas(event: React.MouseEvent<HTMLCanvasElement>) {
    if (mode) {
      addMark(event);
    } else {
      removeMark(event);
    }
  }

  return (
    <div
      id="auto-container"
      className="h-full w-full flex  flex-col items-center gap-3"
    >
      <div
        id="container-espacioSobrante-Central"
        className="grow w-full  text-black border-2 bg-white"
      >
        <div className="relative  ">
          <canvas
            className="absolute border border-black "
            ref={canvasRef}
            height={height}
            width={width}
            onClick={handleCanvas}
          ></canvas>
          <Image
            src={autoImage}
            alt="carro"
            style={{ width: "100%" }}
            ref={autoRef}
            key={3}
          ></Image>
        </div>
      </div>
      <ButtonsAction agregar={handleAgregar} eliminar={handleEliminar} active={mode} />
    </div>
  );
}

function ButtonsAction({
  agregar,
  eliminar,
  active
}: {
  agregar: () => void;
  eliminar: () => void;
  active:boolean
}) {
  

  return (
    <div className="container-buttons flex flex-row justify-end gap-2 w-full pb-2">
      <button
        className={`
         ${active ? "bg-azulNormal":"bg-blue-300"  } text-blanco
         px-5 py-2 rounded-md 
         shadow-lg
         
         duration-200
         ${!active ? "hover:bg-azulNormal" : "hover:bg-azulNormal"}
         
         hover:scale-105
         `}
        onClick={() => {
          agregar();
          // if(active==false){
          //   setActive(true)
          // }
        }}
      >Agregar</button>
      <button
        className={`
           ${active ?"bg-red-300"  :"bg-red-600"} text-blanco
           px-5 py-2 rounded-md 
           shadow-lg
           
           duration-200
           ${active ? "hover:bg-red-600": "hover:bg-red-600"}
           
           hover:scale-105
           `}
        onClick={() => {
          eliminar();
          // if(active){
          //   setActive(false)
          // }
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

import React, { useState, useRef, useEffect, MutableRefObject } from "react";
import Image from "next/image";
import autoImage from "@/assets/icons/auto.png";
import ButtonAzul from "../ButtonAzul";
import useElementSize from "@/app/utils/useElementSize";
import { useDatosSalidaReducer } from "@/app/context/salidasReducer";

interface CoordenadasType {
  x: number | null;
  y: number | null;
  widthOriginal: number | null;
  heightOriginal: number | null;
}

export function drawMarks(
  canvasRef: MutableRefObject<HTMLCanvasElement | null>,
  coordenadas: CoordenadasType[],
  imagen:  MutableRefObject<HTMLImageElement | null>
  
) {
  const ctx = canvasRef.current?.getContext("2d");
  
  if (ctx && coordenadas && imagen.current) {
    ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;

    coordenadas.forEach((marca) => {
      const newCoordenadas = redimensionarCoordenada(
        marca,
        marca.widthOriginal,
        marca.heightOriginal,
        imagen.current.width,
        imagen.current.height
      );

      if (newCoordenadas) {
        ctx.beginPath();
        ctx.moveTo(newCoordenadas.x - 10, newCoordenadas.y - 10);
        ctx.lineTo(newCoordenadas.x + 10, newCoordenadas.y + 10);
        ctx.moveTo(newCoordenadas.x - 10, newCoordenadas.y + 10);
        ctx.lineTo(newCoordenadas.x + 10, newCoordenadas.y - 10);
        ctx.stroke();
      }
    });
  }
}

export function redimensionarCoordenada(
  coordenada: CoordenadasType,
  originalWidth: number | null,
  originalHeight: number | null,
  newWidth: number | null,
  newHeight: number | null
) {
  if (originalWidth && originalHeight && newWidth && newHeight) {
    const xRatio = newWidth / originalWidth;
    const yRatio = newHeight / originalHeight;

    const newX = coordenada.x !== null ? coordenada.x * xRatio : null;
    const newY = coordenada.y !== null ? coordenada.y * yRatio : null;

    return { x: newX, y: newY };
  }
  return coordenada;
}





export function CarroseriaUI() {
 
  const initialStateCoordenadas: CoordenadasType[] = [];

  const [coordenadas, setCoordenadas] = useState<CoordenadasType[]>(initialStateCoordenadas);

  const containerCanvas = useRef<HTMLDivElement | null>(null);
  const containerCanvasSize = useElementSize(containerCanvas);

  const imageRef = useRef<HTMLImageElement | null>(null);
  const { width, height } = useElementSize(imageRef);

  const [mode, setMode] = useState<boolean>(true);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { dispatch, state } = useDatosSalidaReducer();

  useEffect(() => {
    if (imageRef.current) {
      drawMarks(canvasRef, coordenadas, imageRef);
      dispatch({ type: "SET_CARROCERIA", payload: coordenadas });
    }
  }, [coordenadas, imageRef.current]);

  

  

  function addMark(event: React.MouseEvent<HTMLCanvasElement>) {
    const rect = canvasRef.current!.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setCoordenadas((coordenadasAnteriores) => [
      ...coordenadasAnteriores,
      { x, y, widthOriginal: width, heightOriginal: height },
    ]);
  }

  function removeMark(event: React.MouseEvent<HTMLCanvasElement>) {
    const rect = canvasRef.current!.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setCoordenadas((coordenadas) =>
      coordenadas.filter((marca) => {
        const distance = Math.sqrt((x - (marca.x || 0)) ** 2 + (y - (marca.y || 0)) ** 2);
        return distance >= 10;
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

  useEffect(() => {
    
    if(imageRef.current){
      
      drawMarks(canvasRef,coordenadas, imageRef);
    
    }
  }, [coordenadas, width, height]);

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
      className="h-full w-full flex pb-10 flex-col items-center gap-3"
    >
      <div
        id="container-espacioSobrante-Central"
        className="grow w-5/6  text-black border-2"
        ref={containerCanvas}
      >
        <div className="container-canvasImg relative  w-full     ">
          <Image
            src={autoImage}
            height={containerCanvasSize.height}
            alt="car"
            key={5}
            ref={imageRef}
          />
          <canvas
            onClick={(e) => {
              handleCanvas(e);
            }}
            className="absolute top-0  z-10 border-4  border-slate-800"
            ref={canvasRef}
            width={width || undefined}
            height={height || undefined}
          />
        </div>
      </div>

      <div className="container-buttons flex flex-row justify-end gap-2 w-5/6 pb-2">
        <ButtonAzul
          text={"Agregar"}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            handleAgregar();
          }}
        />
        <ButtonAzul
          text={"Eliminar"}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            handleEliminar();
          }}
        />
        <ButtonAzul text={"Enviar"} onClick={() => {}} />
      </div>
    </div>
  );
}

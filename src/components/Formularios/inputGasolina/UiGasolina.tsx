'use client'
import Image from "next/image";

import marcadorGasolina from "@/assets/icons/MarcadorGasolina.png";

import useElementSize from "@/utils/custom/useElementSize";
import { useEffect, useRef } from "react";
import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";

function UiGasolina({ porcentaje }:{porcentaje:number}) {
  const containerMarcador = useRef<HTMLDivElement>(null);
  const { height } = useElementSize(containerMarcador);


  // const { dispatch } = useDatosSalidaLlegadaReducer();
  // useEffect(() => {
  //   dispatch({ type: "SET_TANQUE", payload:`${porcentaje}` });
  // }, [porcentaje,dispatch]);


  const red = 255 - porcentaje * 5.1 < 0 ? 0 : 255 - porcentaje * 5.55; // Valor de rojo decrece de 255 a 0
  const green = porcentaje * 5.1 > 230 ? 250 : porcentaje * 5.55; // Valor de verde aumenta de 0 a 255
  const porcentajeAgrados = porcentaje * 1.8 - 90;



  // Define el estilo CSS del fondo con el gradiente
  const backgroundStyle = {
    zIndex: 10,
    borderRadius: height,
    height: height * 2,
    background: `linear-gradient(90deg, rgba(${red},${green},0,.7) 0%, rgba(${red},${green},${porcentaje},1) 50%, transparent 50%)`,
    transform: `rotate(${porcentajeAgrados}deg)`,
  };

  return (
    <div
      className="overflow-hidden rounded-lg w-full border-t-2  rounded-t-full bg-primary relative flex justify-center h-full"
      ref={containerMarcador}
    >
       <Image src={marcadorGasolina} style={{zIndex:11}}  alt="marcador"/>
      <div
        className={`semicirculo absolute  w-full`}
        style={backgroundStyle}
      ></div>
      <div
        style={{
          borderBottom: `${parseInt(height * 0.8)}px  solid red`,
          borderLeft: `${parseInt(height / 10)}px  solid  transparent`,
          borderRight: `${parseInt(height / 10)}px solid transparent`,
          transformOrigin: "bottom center",
          transform: `rotate(${porcentajeAgrados}deg)`,
          bottom: -2,
          zIndex: 12,
          borderRadius: 10,
          position: "absolute",
        }}
        className={`aguja`}
      ></div>

     
    </div>
  );
}
export default UiGasolina;

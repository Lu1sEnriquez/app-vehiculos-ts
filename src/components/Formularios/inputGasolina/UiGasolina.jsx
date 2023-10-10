import Image from "next/image";

import marcadorGasolina from "@/assets/icons/marcadorGasolina.png";

import useElementSize from "@/app/utils/useElementSize";
import {  useRef} from "react";



function UiGasolina({porcentaje}) {


    const containerMarcador = useRef(null);
    const { height } = useElementSize(containerMarcador);


    

    const red = 255 - porcentaje * 2.55; // Valor de rojo decrece de 255 a 0
    const green = porcentaje * 2.55; // Valor de verde aumenta de 0 a 255
    const porcentajeAgrados =porcentaje * 1.8 - 90;


    // Define el estilo CSS del fondo con el gradiente
    const backgroundStyle = {
      
      borderRadius: height,
      height: height * 2,
      background: `linear-gradient(90deg, rgba(${red},${green},23,1) 0%, rgba(${red},${green},26,1) 50%, rgba(255,255,255,1) 50%)`,
      transform: `rotate(${porcentajeAgrados}deg)`,
    };
  


    
  return (
    <div
        className="overflow-hidden rounded-lg w-full border-t-2  rounded-t-full bg-primary relative flex justify-center h-full"
        ref={containerMarcador}
      >
        <div
          className={`semicirculo absolute z-0 w-full`}
          style={backgroundStyle}
        ></div>
        <div
          style={{
            borderBottom: `${parseInt(height * 0.8)}px solid red`,
            borderLeft:`${parseInt(height /15)}px solid  transparent`,
            borderRight:`${parseInt(height /15)}px solid transparent`,
            transformOrigin: "bottom center",
            transform: `rotate(${porcentajeAgrados}deg)`,
            bottom: 0,
            zIndex:3,
            position: 'absolute',
            
          }}
          className={`aguja`}
        ></div>

        <Image src={marcadorGasolina} className="z-10" />
      </div>
  )
}
export default UiGasolina
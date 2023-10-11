'use client'
import useElementSize from '@/app/utils/useElementSize';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { drawMarks } from './CarroseriaUI';

function MostrarAuto({coordenadas, autoImage}) {

  const canvaRef = useRef(null);
  const autoRef = useRef(null);
 const {width, height} = useElementSize(autoRef)

  useEffect(() => { 
    canvaRef.current.width = width;
    canvaRef.current.height = height;
    drawMarks(canvaRef, coordenadas, autoRef);
  }, [coordenadas, width,height ]);



  return (
    <div className="relative  ">
          <canvas className="absolute border-2 border-blue-700 " ref={canvaRef} height={height} width={width}></canvas>       
          <Image   src={autoImage} alt="carro" width={"100%"}   ref={autoRef}  key={3}></Image>
        </div>
  )
}

export default MostrarAuto
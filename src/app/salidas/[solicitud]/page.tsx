'use client'
import FormularioSalida from "@/components/complejos/FormularioSalida";
import ApartadosType from "@/models/ReporteGeneralType";

import {useParams} from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  params: { solicitud: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}
function FormSalidaPage({ children}: Props) {
  const params = useParams();
  
  const [apartado, setApartado] = useState<ApartadosType | null>(null)
  
  useEffect(()=>{
    
    if(typeof params.solicitud == "string"){
      const solicitud = decodeURIComponent(params.solicitud)
      const result = JSON.parse(solicitud)
      console.log(result);
      
      setApartado(result)
    }
  },[params.solicitud])

  


  
   
  // console.log(data);
  
  // let apartado;
  // if(data){
  //  apartado= typeof data =="string"? JSON.parse(data) : JSON.parse(data.join(''))
  // }
  return (
    <div className="container bg-[#f2f2f2] text-black  w-full  h-full  ">
      {apartado && <FormularioSalida data={apartado} ></FormularioSalida>}
    </div>
  );
}
export default FormSalidaPage;

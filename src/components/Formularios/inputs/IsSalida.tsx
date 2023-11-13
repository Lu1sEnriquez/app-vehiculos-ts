"use client"
import { estadoType } from "@/models/ReporteGeneralType";
import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";
import { useEffect } from "react";


interface Props{isSalida: boolean;
   estado:estadoType
  }
function IsSalida({isSalida, estado}:Props) {
  
    const {state,dispatch } = useDatosSalidaLlegadaReducer();
  
    useEffect(() => {
      dispatch({type:"SET_ISSALIDA", payload: isSalida})
    dispatch({type:"SET_ESTADO", payload:estado})
      
    }, [dispatch, isSalida, estado])
    
    return <></>
  }

  
export default IsSalida; 
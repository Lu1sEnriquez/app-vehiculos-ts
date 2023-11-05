"use client"
import { useDatosSalidaLlegadaReducer } from "@/reducer/salidaLlegadaReducer";
import { useEffect } from "react";
function IsSalida({isSalida}:{isSalida: boolean}) {
  
    const {state,dispatch } = useDatosSalidaLlegadaReducer();
  
    useEffect(() => {
      dispatch({type:"SET_ISSALIDA", payload: true})
    
      
    }, [dispatch])
    
    return <></>
  }

  
export default IsSalida; 
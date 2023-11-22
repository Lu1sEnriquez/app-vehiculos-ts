"use client";
import { useEffect, useState, useCallback } from "react";
import { useErrorReducer } from "@/reducer/errorReducer";
import { Alert, AlertTitle } from "@mui/material";
import Swal from "sweetalert2";

function MostrarAlert() {
  const [error, setError] = useState<string | null>(null);
  const { dispatch, state } = useErrorReducer();

  // useEffect(() => {
  //   if (state.error) {
  //     setError(state.error);
  //   }
  //   const contador = setTimeout(() => {

  //     setError(null);
  //     dispatch({ type: "SET_ERROR", payload: null });

  //   }, 3000);
  //   return () => clearTimeout(contador);
  // }, [state, dispatch]);

  useEffect(() => {
    if (state.error) {
      Swal.fire({
        title: `${state.error}`,
        text:`${state.message}` ,
        icon: "error",
        confirmButtonText: "Corregir",
        
      }).then( result =>{
        if(result.isConfirmed){
          dispatch({type:"SET_ERROR",payload:null})
          dispatch({type:"SET_MESSAGE",payload:null})
        }
      })
    }
  },[state,dispatch]);

  return (
    <>
      {/* {error && (
       
            <div className={`fixed z-50 top-14 right-10 animate-fade-left animate-duration-300 `}>
              <Alert variant="filled" severity="error">
                <AlertTitle>{error}</AlertTitle>
              </Alert>
            </div>
       
      )} */}
    </>
  );
}

export default MostrarAlert;

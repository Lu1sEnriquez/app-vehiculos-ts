"use client";
import { useErrorReducer } from "@/reducer/errorReducer";
import { Alert, AlertTitle } from "@mui/material";
import React, { useEffect, useState } from "react";

function MostrarAlert() {
  const [error, setError] = useState<string | null>(null);
  const { dispatch, state } = useErrorReducer();

  useEffect(() => {
    if (state.error) {
      setError(state.error);
    }
    const contador = setTimeout(() => {
      setError(null);
      dispatch({ type: "SET_ERROR", payload: null });
    }, 3000);
    return () => clearTimeout(contador);
  }, [state, dispatch]);

  return (
    <>
      {error && (
       
            <div className={`fixed z-50 top-14 right-10 animate-fade-left animate-duration-300 `}>
              <Alert variant="filled" severity="error">
                <AlertTitle>{error}</AlertTitle>
              </Alert>
            </div>
       
      )}
    </>
  );
}

export default MostrarAlert;

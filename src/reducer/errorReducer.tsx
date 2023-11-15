

"use client";
// Importa las bibliotecas de TypeScript y React
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { estadoType } from "@/models/ReporteGeneralType";



export  interface ErrorStateType{
    error:string |null;
    message:string |null;
    status:number|null;
}

// Define los tipos de acciones
type ActionTypes =
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "SET_MESSAGE"; payload: string | null }
  | { type: "SET_STATUS"; payload: number | null }

  



// Define el reducer para gestionar el estado
const ErrorReducer = (
  state: ErrorStateType,
  action: ActionTypes
): ErrorStateType => {
  switch (action.type) {
    case "SET_ERROR":
      return { ...state, error: action.payload };
    
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    
    case "SET_STATUS":
      return { ...state, status: action.payload };
    
    default:
      return state;
  }
};

// Define el contexto
export const ErrorContext = createContext<
  | {
      state: ErrorStateType;
      dispatch: React.Dispatch<ActionTypes>;
    }
  | undefined
>(undefined);

// Proveedor de contexto
type ErrorProviderProps = {
  children?: ReactNode;
  value?: ErrorStateType;
};

export function ErrorProvider({ children }: ErrorProviderProps) {
  // Define el estado inicial
  const initialState:ErrorStateType = {
    error: null,
    message:null,
    status:null
  };

  // Usa useReducer para gestionar el estado con el reducer
  const [state, dispatch] = useReducer(ErrorReducer, initialState);

  // Proporciona el estado y el dispatcher a través del contexto
  const contextValue = { state, dispatch };

  return (
    <ErrorContext.Provider value={contextValue}>
      {children}
    </ErrorContext.Provider>
  );
}

export function useErrorReducer() {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error(
      "useDatosSalida debe utilizarse dentro de un DatosSalidasProvider"
    );
  }
  return context;
}

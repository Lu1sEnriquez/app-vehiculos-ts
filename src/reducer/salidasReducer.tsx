"use client";
import datosSalidaType from "@/models/DatosSalidaType";
import CoordenadasType from "@/models/CoordenadasType";
// Importa las bibliotecas de TypeScript y React
import React, { createContext, useContext, useReducer, ReactNode } from "react";

// Define los tipos de acciones
type ActionTypes =
  | { type: "SET_IDSOLICITUD"; payload: number | null }
  | { type: "SET_FECHA_SALIDA"; payload: string | null }
  | { type: "SET_NOMBRE_SOLICITANTE"; payload: string }
  | { type: "SET_NOMBRE_CHOFER"; payload: string }
  | { type: "SET_DEPARTAMENTO"; payload: string }
  | { type: "SET_PLACA"; payload: string | null }
  | { type: "SET_LICENCIA"; payload: string | null }
  | { type: "SET_HORA_SALIDA"; payload: string | null }
  | { type: "SET_KILOMETRAJE"; payload: number | null }
  | { type: "SET_TIENE_GOLPES"; payload: boolean | null }
  | { type: "SET_CARROCERIA"; payload: CoordenadasType[] }
  | { type: "SET_MARCADOR_GASOLINA"; payload: HTMLDivElement | null }
  | { type: "SET_PORCENTAJE_GASOLINA"; payload: number | null }
  | { type: "SET_NOMBRE_VIGILANTE"; payload: string | null }
  | { type: "SET_FIRMA_VIGILANTE"; payload: string | null }
  | { type: "SET_FIRMA_SOLICITANTE"; payload: string | null }
  | { type: "SET_ISLOCAL"; payload: boolean | null }
  | { type: "SET_DESTINO"; payload: string | null }
  | { type: "SET_OBSERVACIONES"; payload: string | null }
  | { type: "SET_ISSALIDA"; payload: boolean | null }
  | {
      type: "SET_ACCESORIOS";
      payload: {
        gato: boolean | null;
        extra: boolean | null;
        cables: boolean | null;
        luzMuerta: boolean | null;
        extintor: boolean | null;
        documentos: boolean | null;
      };
    };




// Define el reducer para gestionar el estado
const DatosSalidaReducer = (
  state: datosSalidaType,
  action: ActionTypes
): datosSalidaType => {
  switch (action.type) {
    case "SET_IDSOLICITUD":
      return { ...state, idSolicitud: action.payload };
    case "SET_FECHA_SALIDA":
      return { ...state, fecha: action.payload };
    case "SET_NOMBRE_SOLICITANTE":
      return { ...state, nombreSolicitante: action.payload };
    case "SET_NOMBRE_CHOFER":
      return { ...state, chofer: action.payload };
    case "SET_DEPARTAMENTO":
      return { ...state, departamento: action.payload };
    case "SET_PLACA":
      return { ...state, placa: action.payload };
    case "SET_LICENCIA":
      return { ...state, licencia: action.payload };
    case "SET_HORA_SALIDA":
      return { ...state, hora: action.payload };
    case "SET_KILOMETRAJE":
      return { ...state, kilometraje: action.payload };
    case "SET_TIENE_GOLPES":
      return { ...state, golpes: action.payload };
    case "SET_CARROCERIA":
      return { ...state, carroceria: action.payload };
    case "SET_PORCENTAJE_GASOLINA":
      return { ...state, tanque: action.payload };
    case "SET_ISSALIDA":
      return { ...state, isSalida: action.payload };
    case "SET_NOMBRE_VIGILANTE":
      return { ...state, nombreVigilante: action.payload };
    case "SET_FIRMA_VIGILANTE":
      return { ...state, firmaVigilante: action.payload };
    case "SET_FIRMA_SOLICITANTE":
      return { ...state, firmaSolicitante: action.payload };
    case "SET_ISLOCAL":
      return { ...state, isLocal: action.payload };
    case "SET_DESTINO":
      return { ...state, destino: action.payload };
    case "SET_ACCESORIOS":
      return { ...state, accesorios: action.payload };
    case "SET_OBSERVACIONES":
      return { ...state, observaciones: action.payload };
    default:
      return state;
  }
};

// Define el contexto
export const DatosSalidaContext = createContext<
  | {
      state: datosSalidaType;
      dispatch: React.Dispatch<ActionTypes>;
    }
  | undefined
>(undefined);

// Proveedor de contexto
type DatosSalidasProviderProps = {
  children: ReactNode;
  value: datosSalidaType;
};

export function DatosSalidasProvider({ children }: DatosSalidasProviderProps) {
  // Define el estado inicial
  const initialState: datosSalidaType = {
    idSolicitud: 13,
    fecha: null,
    hora: null,
    nombreSolicitante: null,
    chofer: null,
    licencia:null,
    departamento: "OFICINA",
    placa: null,
    kilometraje: null,
    golpes: true,
    carroceria: [],
    tanque: null,
    nombreVigilante: null,
    firmaVigilante: null,
    firmaSolicitante: null,
    isLocal:null,
    destino: null,
    accesorios: {
      gato: null,
      extra: null,
      cables: null,
      luzMuerta: null,
      extintor: null,
      documentos: null,
    },

    observaciones: null,
    isSalida:true
  };

  // Usa useReducer para gestionar el estado con el reducer
  const [state, dispatch] = useReducer(DatosSalidaReducer, initialState);

  // Proporciona el estado y el dispatcher a través del contexto
  const contextValue = { state, dispatch };

  return (
    <DatosSalidaContext.Provider value={contextValue}>
      {children}
    </DatosSalidaContext.Provider>
  );
}

export function useDatosSalidaReducer() {
  const context = useContext(DatosSalidaContext);
  if (!context) {
    throw new Error(
      "useDatosSalida debe utilizarse dentro de un DatosSalidasProvider"
    );
  }
  return context;
}

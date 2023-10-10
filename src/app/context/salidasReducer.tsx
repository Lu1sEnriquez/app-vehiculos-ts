"use client";
// Importa las bibliotecas de TypeScript y React
import React, { createContext, useContext, useReducer, ReactNode } from "react";

// Define los tipos de acciones
type ActionTypes =
  | { type: "SET_FOLIO"; payload: string | null }
  | { type: "SET_FECHA_SALIDA"; payload: string | null }
  | { type: "SET_NOMBRE_SOLICITANTE"; payload: string }
  | { type: "SET_PLACA"; payload: string | null }
  | { type: "SET_HORA_SALIDA"; payload: string | null }
  | { type: "SET_KILOMETRAJE"; payload: number | null }
  | { type: "SET_TIENE_GOLPES"; payload: boolean | null }
  | { type: "SET_CARROCERIA"; payload: coordenadasType[] }
  | { type: "SET_PORCENTAJE_GASOLINA"; payload: number | null }
  | { type: "SET_NOMBRE_VIGILANTE"; payload: string | null }
  | { type: "SET_FIRMA_VIGILANTE"; payload: string | null }
  | { type: "SET_FIRMA_SOLICITANTE"; payload: string | null }
  | { type: "SET_DESTINO"; payload: string | null }
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

interface coordenadasType {
  x: number | null;
  y: number | null;
  widthOriginal: number | null;
  heightOriginal: number | null;
}

// Define el estado inicial
type InitialStateType = {
  folio: string | null;
  fechaSalida: string | null;
  nombreSolicitante: string;
  placa: string | null;
  horaSalida: string | null;
  kilometraje: number | null;
  golpes: boolean | null;
  carroceria: coordenadasType[];
  porcentajeGasolina: number | null;
  nombreVigilante: string | null;
  firmaVigilante: string | null;
  firmaUsuario: string | null;
  destino: string | null;
  accesorios: {
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
  state: InitialStateType,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case "SET_FOLIO":
      return { ...state, folio: action.payload };
    case "SET_FECHA_SALIDA":
      return { ...state, fechaSalida: action.payload };
    case "SET_NOMBRE_SOLICITANTE":
      return { ...state, nombreSolicitante: action.payload };
    case "SET_PLACA":
      return { ...state, placa: action.payload };
    case "SET_HORA_SALIDA":
      return { ...state, horaSalida: action.payload };
    case "SET_KILOMETRAJE":
      return { ...state, kilometraje: action.payload };
    case "SET_TIENE_GOLPES":
      return { ...state, golpes: action.payload };
    case "SET_CARROCERIA":
      return { ...state, carroceria: action.payload };
    case "SET_PORCENTAJE_GASOLINA":
      return { ...state, porcentajeGasolina: action.payload };
    case "SET_NOMBRE_VIGILANTE":
      return { ...state, nombreVigilante: action.payload };
    case "SET_FIRMA_VIGILANTE":
      return { ...state, firmaVigilante: action.payload };
    case "SET_FIRMA_SOLICITANTE":
      return { ...state, firmaUsuario: action.payload };
    case "SET_DESTINO":
      return { ...state, destino: action.payload };
    case "SET_ACCESORIOS":
      return { ...state, accesorios: action.payload };
    default:
      return state;
  }
};

// Define el contexto
export const DatosSalidaContext = createContext<
  | {
      state: InitialStateType;
      dispatch: React.Dispatch<ActionTypes>;
    }
  | undefined
>(undefined);

// Proveedor de contexto
type DatosSalidasProviderProps = {
  children: ReactNode;
  value: InitialStateType;
};

export function DatosSalidasProvider({ children }: DatosSalidasProviderProps) {
  // Define el estado inicial
  const initialState: InitialStateType = {
    folio: null,
    fechaSalida: null,
    nombreSolicitante: "luis",
    placa: null,
    horaSalida: null,
    kilometraje: null,
    golpes: null,
    carroceria: [],
    porcentajeGasolina: null,
    nombreVigilante: null,
    firmaVigilante: null,
    firmaUsuario: null,
    destino: null,
    accesorios: {
      gato: null,
      extra: null,
      cables: null,
      luzMuerta: null,
      extintor: null,
      documentos: null,
    },
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
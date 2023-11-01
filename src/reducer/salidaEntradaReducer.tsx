"use client";

import car from '@/utils/examples/autoDaños.png'
import marcador from '@/utils/examples/marcador.png'
import firma from '@/utils/examples/firma.png'
// Importa las bibliotecas de TypeScript y React
import React, { createContext, useContext, useReducer, ReactNode } from "react";

type ActionTypes =
  | { type: "SET_FOLIO"; payload: string | null }
  | { type: "SET_FECHA_SALIDA"; payload: string | null }
  | { type: "SET_FECHA_LLEGADA"; payload: string | null }
  | { type: "SET_HORA_SALIDA"; payload: string | null }
  | { type: "SET_HORA_LLEGADA"; payload: string | null }
  | { type: "SET_NOMBRE_SOLICITANTE"; payload: string | null }
  | { type: "SET_PLACA"; payload: string | null }
  | { type: "SET_VEHICULO"; payload: string | null }
  | { type: "SET_DEPARTAMENTO"; payload: string | null }
  | { type: "SET_KILOMETRAJE_SALIDA"; payload: number | null }
  | { type: "SET_KILOMETRAJE_LLEGADA"; payload: number | null }
  | { type: "SET_GOLPES_SALIDA"; payload: boolean | null }
  | { type: "SET_GOLPES_LLEGADA"; payload: boolean | null }
  | { type: "SET_CARROCERIA_SALIDA"; payload: CoordenadasType[] }
  | { type: "SET_CARROCERIA_LLEGADA"; payload: CoordenadasType[] }
  | { type: "SET_PORCENTAJE_GASOLINA_SALIDA"; payload: number | null }
  | { type: "SET_PORCENTAJE_GASOLINA_LLEGADA"; payload: number | null }
  | { type: "SET_NOMBRE_VIGILANTE_SALIDA"; payload: string | null }
  | { type: "SET_NOMBRE_VIGILANTE_LLEGADA"; payload: string | null }
  | { type: "SET_FIRMA_VIGILANTE_SALIDA"; payload: string | null }
  | { type: "SET_FIRMA_VIGILANTE_LLEGADA"; payload: string | null }
  | { type: "SET_FIRMA_SOLICITANTE_SALIDA"; payload: string | null }
  | { type: "SET_FIRMA_SOLICITANTE_LLEGADA"; payload: string | null }
  | { type: "SET_DESTINO"; payload: string | null }
  | { type: "SET_ACCESORIOS_SALIDA"; payload: accesorios }
  | { type: "SET_ACCESORIOS_LLEGADA"; payload: accesorios }
  | { type: "SET_OBSERVACIONES_SALIDA"; payload: string | null }
  | { type: "SET_OBSERVACIONES_LLEGADA"; payload: string | null };

export interface CoordenadasType {
  x: number | string | undefined;
  y: number | string | undefined;
  widthOriginal: number | string | undefined;
  heightOriginal: number | string | undefined;
}
export interface accesorios {
    gato: boolean | null;
    extra: boolean | null;
    cables: boolean | null;
    luzMuerta: boolean | null;
    extintor: boolean | null;
    documentos: boolean | null;
  };
// Define el estado inicial
export interface datosSalidaEntradaType  {
  folio: string | null;
  fechaSalida: string | null;
  fechaLlegada: string | null;
  horaSalida: string | null;
  horaLlegada: string | null;
  nombreSolicitante: string | null;
  placa: string | null;
  licencia:string| null;
  chofer: string| null;
  vehiculo: string | null;
  departamento: string | null;
  kilometrajeSalida: number | null;
  kilometrajeLlegada: number | null;
  golpesSalida: boolean | null;
  golpesLlegada: boolean | null;
  carroceriaSalida: CoordenadasType[];
  carroceriaLlegada: CoordenadasType[];
  porcentajeGasolinaSalida: number | null;
  porcentajeGasolinaLlegada: number | null;
  nombreVigilanteSalida: string | null;
  nombreVigilanteLlegada: string | null;
  firmaVigilanteSalida: string | null;
  firmaVigilanteLlegada: string | null;
  firmaSolicitanteSalida: string | null;
  firmaSolicitanteLlegada: string | null;
  destino: string | null;
  accesoriosSalida: accesorios;
  accesoriosLlegada:accesorios;
  observacionesSalida: string | null;
  observacionesLlegada: string | null;
};

// Define el reducer para gestionar el estado
const DatosSalidaEntradaReducer = (
    state: datosSalidaEntradaType,
    action: ActionTypes
  ): datosSalidaEntradaType => {
    switch (action.type) {
      case "SET_FOLIO":
        return { ...state, folio: action.payload };
      case "SET_FECHA_SALIDA":
        return { ...state, fechaSalida: action.payload };
      case "SET_FECHA_LLEGADA":
        return { ...state, fechaLlegada: action.payload };
      case "SET_HORA_SALIDA":
        return { ...state, horaSalida: action.payload };
      case "SET_HORA_LLEGADA":
        return { ...state, horaLlegada: action.payload };
      case "SET_NOMBRE_SOLICITANTE":
        return { ...state, nombreSolicitante: action.payload };
      case "SET_PLACA":
        return { ...state, placa: action.payload };
      case "SET_VEHICULO":
        return { ...state, vehiculo: action.payload };
      case "SET_DEPARTAMENTO":
        return { ...state, departamento: action.payload };
      case "SET_KILOMETRAJE_SALIDA":
        return { ...state, kilometrajeSalida: action.payload };
      case "SET_KILOMETRAJE_LLEGADA":
        return { ...state, kilometrajeLlegada: action.payload };
      case "SET_GOLPES_SALIDA":
        return { ...state, golpesSalida: action.payload };
      case "SET_GOLPES_LLEGADA":
        return { ...state, golpesLlegada: action.payload };
      case "SET_CARROCERIA_SALIDA":
        return { ...state, carroceriaSalida: action.payload };
      case "SET_CARROCERIA_LLEGADA":
        return { ...state, carroceriaLlegada: action.payload };
      case "SET_PORCENTAJE_GASOLINA_SALIDA":
        return { ...state, porcentajeGasolinaSalida: action.payload };
      case "SET_PORCENTAJE_GASOLINA_LLEGADA":
        return { ...state, porcentajeGasolinaLlegada: action.payload };
      case "SET_NOMBRE_VIGILANTE_SALIDA":
        return { ...state, nombreVigilanteSalida: action.payload };
      case "SET_NOMBRE_VIGILANTE_LLEGADA":
        return { ...state, nombreVigilanteLlegada: action.payload };
      case "SET_FIRMA_VIGILANTE_SALIDA":
        return { ...state, firmaVigilanteSalida: action.payload };
      case "SET_FIRMA_VIGILANTE_LLEGADA":
        return { ...state, firmaVigilanteLlegada: action.payload };
      case "SET_FIRMA_SOLICITANTE_SALIDA":
        return { ...state, firmaSolicitanteSalida: action.payload };
      case "SET_FIRMA_SOLICITANTE_LLEGADA":
        return { ...state, firmaSolicitanteLlegada: action.payload };
      case "SET_DESTINO":
        return { ...state, destino: action.payload };
      case "SET_ACCESORIOS_SALIDA":
        return { ...state, accesoriosSalida: action.payload };
      case "SET_ACCESORIOS_LLEGADA":
        return { ...state, accesoriosLlegada: action.payload };
      case "SET_OBSERVACIONES_SALIDA":
        return { ...state, observacionesSalida: action.payload };
      case "SET_OBSERVACIONES_LLEGADA":
        return { ...state, observacionesLlegada: action.payload };
      default:
        return state;
    }
  };

// Define el contexto
export const DatosSalidaEntradaContext = createContext<
  | {
      state: datosSalidaEntradaType;
      dispatch: React.Dispatch<ActionTypes>;
    }
  | undefined
>(undefined);

// Proveedor de contexto
type DatosSalidasProviderProps = {
  children: ReactNode;
  value: datosSalidaEntradaType;
};

export function DatosSalidaEntradaProvider({ children }: DatosSalidasProviderProps) {
  // Define el estado inicial
  const initialState: datosSalidaEntradaType = {
    folio: "ABC123",
    fechaSalida: "2023-10-01",
    fechaLlegada: "2023-10-02",
    horaSalida: "08:00 AM",
    horaLlegada: "05:00 PM",
    nombreSolicitante: "John Doe",
    placa: "XYZ-789",
    licencia: "ASDEFW23423DD342",
    chofer: "Vitor Lopez Perez",
    vehiculo: "Sedan",
    departamento: "Logística",
    kilometrajeSalida: 5000,
    kilometrajeLlegada: 5200,
    golpesSalida: true,
    golpesLlegada: false,
    carroceriaSalida: [
      {
        x: 10,
        y: 20,
        widthOriginal: 30,
        heightOriginal: 40,
      },
      {
        x: 50,
        y: 60,
        widthOriginal: 70,
        heightOriginal: 80,
      },
    ],
    carroceriaLlegada: [
      {
        x: 15,
        y: 25,
        widthOriginal: 35,
        heightOriginal: 45,
      },
      {
        x: 55,
        y: 65,
        widthOriginal: 75,
        heightOriginal: 85,
      },
    ],
    porcentajeGasolinaSalida: 75,
    porcentajeGasolinaLlegada: 30,
    nombreVigilanteSalida: "Jane Smith",
    nombreVigilanteLlegada: "Mike Johnson",
    firmaVigilanteSalida: firma.src,
    firmaVigilanteLlegada: firma.src,
    firmaSolicitanteSalida: firma.src,
    firmaSolicitanteLlegada: firma.src,
    destino: "Local",
    accesoriosSalida: {
      gato: true,
      extra: false,
      cables: true,
      luzMuerta: false,
      extintor: true,
      documentos: false,
    },
    accesoriosLlegada: {
      gato: false,
      extra: true,
      cables: false,
      luzMuerta: true,
      extintor: false,
      documentos: true,
    },
    observacionesSalida: "Ninguna observación en la salida.",
    observacionesLlegada: "Algunas observaciones en la llegada.",
  };

  // Usa useReducer para gestionar el estado con el reducer
  const [state, dispatch] = useReducer(DatosSalidaEntradaReducer, initialState);

  // Proporciona el estado y el dispatcher a través del contexto
  const contextValue = { state, dispatch };

  return (
    <DatosSalidaEntradaContext.Provider value={contextValue}>
      {children}
    </DatosSalidaEntradaContext.Provider>
  );
}

export function useDatosSalidaEntradaReducer() {
  const context = useContext(DatosSalidaEntradaContext);
  if (!context) {
    throw new Error(
      "useDatosSalida debe utilizarse dentro de un DatosSalidasEntradaProvider"
    );
  }
  return context;
}

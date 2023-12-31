"use client";
import DatosSalidaLlegadaType from "@/models/DatosSalidaType";
import CoordenadasType from "@/models/CoordenadasType";
// Importa las bibliotecas de TypeScript y React
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { estadoType } from "@/models/ReporteGeneralType";

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
  | { type: "SET_KILOMETRAJE"; payload: string | null }
  | { type: "SET_TIENE_GOLPES"; payload: boolean | null }
  | { type: "SET_CARROCERIA"; payload: CoordenadasType[] }
  | { type: "SET_TANQUE"; payload: string | null }
  | { type: "SET_NOMBRE_VIGILANTE"; payload: string | null }
  | { type: "SET_FIRMA_VIGILANTE"; payload: string | null }
  | { type: "SET_FIRMA_SOLICITANTE"; payload: string | null }
  | { type: "SET_ISLOCAL"; payload: boolean | null }
  | { type: "SET_DESTINO"; payload: string | null }
  | { type: "SET_OBSERVACIONES"; payload: string | null }
  | { type: "SET_ISSALIDA"; payload: boolean | null }
  | { type: "SET_ESTADO"; payload: estadoType | null }
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
const DatosSalidaLlegadaReducer = (
  state: DatosSalidaLlegadaType,
  action: ActionTypes
): DatosSalidaLlegadaType => {
  switch (action.type) {
    case "SET_IDSOLICITUD":
      return { ...state, idSolicitud: action.payload };
    case "SET_FECHA_SALIDA":
      return { ...state, fecha: action.payload };
    case "SET_NOMBRE_SOLICITANTE":
      return { ...state, nombreSolicitante: action.payload == ""?null:action.payload  };
    case "SET_NOMBRE_CHOFER":
      return { ...state, chofer: action.payload == ""?null:action.payload  };
    case "SET_DEPARTAMENTO":
      return { ...state, departamento:action.payload == ""?null:action.payload  };
    case "SET_PLACA":
      return { ...state, placa: action.payload == ""?null:action.payload  };
    case "SET_LICENCIA":
      return { ...state, licencia:action.payload == ""?null:action.payload  };
    case "SET_HORA_SALIDA":
      return { ...state, hora: action.payload };
    case "SET_KILOMETRAJE":
      return { ...state, kilometraje: action.payload == ""?null:action.payload  };
    case "SET_TIENE_GOLPES":
      return { ...state, golpes: action.payload };
    case "SET_CARROCERIA":
      return { ...state, carroceria: action.payload };
    case "SET_TANQUE":
      return { ...state, tanque: action.payload == ""?null:action.payload  };
    case "SET_ISSALIDA":
      return { ...state, isSalida: action.payload };
    case "SET_NOMBRE_VIGILANTE":
      return { ...state, nombreVigilante: action.payload == ""?null:action.payload };
    case "SET_FIRMA_VIGILANTE":
      return { ...state, firmaVigilante: action.payload == ""?null:action.payload  };
    case "SET_FIRMA_SOLICITANTE":
      return { ...state, firmaSolicitante:action.payload == ""?null:action.payload  };
    case "SET_ISLOCAL":
      return { ...state, isLocal: action.payload == null?false: action.payload };
    case "SET_DESTINO":
      return { ...state, destino: action.payload == ""?null:action.payload };
    case "SET_ACCESORIOS":
      return { ...state, accesorios: action.payload };
    case "SET_OBSERVACIONES":
      return { ...state, observaciones: action.payload == ""?null:action.payload  };
    case "SET_ESTADO":
      return { ...state, observaciones: action.payload };
    default:
      return state;
  }
};

// Define el contexto
export const DatosSalidaLlegadaContext = createContext<
  | {
      state: DatosSalidaLlegadaType;
      dispatch: React.Dispatch<ActionTypes>;
    }
  | undefined
>(undefined);

// Proveedor de contexto
type DatosSalidaLlegadaProviderProps = {
  children?: ReactNode;
  value?: DatosSalidaLlegadaType;
};

export function DatosSalidaLlegadaProvider({ children }: DatosSalidaLlegadaProviderProps) {
  // Define el estado inicial
  const initialState: DatosSalidaLlegadaType = {
    idSolicitud: null,
    fecha: null,
    hora: null,
    nombreSolicitante: null,
    chofer: null,
    licencia:null,
    departamento:null,
    placa: null,
    kilometraje: null,
    golpes: false,
    carroceria: [],
    tanque: null,
    nombreVigilante: null,
    firmaVigilante: null,
    firmaSolicitante: null,
    isLocal:true,
    destino: null,
    accesorios: {
      gato: false,
      extra: false,
      cables: false,
      luzMuerta: false,
      extintor: false,
      documentos: false,
    },

    observaciones: null,
    isSalida:true,
    estado:null
    
  };

  // Usa useReducer para gestionar el estado con el reducer
  const [state, dispatch] = useReducer(DatosSalidaLlegadaReducer, initialState);

  // Proporciona el estado y el dispatcher a través del contexto
  const contextValue = { state, dispatch };

  return (
    <DatosSalidaLlegadaContext.Provider value={contextValue}>
      {children}
    </DatosSalidaLlegadaContext.Provider>
  );
}

export function useDatosSalidaLlegadaReducer() {
  const context = useContext(DatosSalidaLlegadaContext);
  if (!context) {
    throw new Error(
      "useDatosSalida debe utilizarse dentro de un DatosSalidasProvider"
    );
  }
  return context;
}

import CoordenadasType from "./CoordenadasType";

// Define el estado inicial
export default interface datosSalidaType {
  idSolicitud: number | null;
  isSalida: boolean | null;
  fecha: string | null;
  nombreSolicitante: string | null;
  chofer: string | null;
  departamento: string | null;
  placa: string | null;
  hora: string | null;
  kilometraje: string | null;
  golpes: boolean | null;
  carroceria: CoordenadasType[];
  tanque: string | null;
  nombreVigilante: string | null;
  firmaVigilante: string | null;
  firmaSolicitante: string | null;
  licencia: string | null;
  isLocal: boolean | null;
  destino: string | null;
  accesorios: {
    gato: boolean | null;
    extra: boolean | null;
    cables: boolean | null;
    luzMuerta: boolean | null;
    extintor: boolean | null;
    documentos: boolean | null;
  };
  observaciones: string | null;
};
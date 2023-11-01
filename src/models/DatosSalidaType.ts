import CoordenadasType from "./CoordenadasType";

// Define el estado inicial
export default interface datosSalidaType {
  isSalida: boolean | null;
  idSolicitud: number | null;
  fecha: string | null;
  nombreSolicitante: string | null;
  chofer: string | null;
  departamento: string | null;
  placa: string | null;
  hora: string | null;
  kilometraje: number | null;
  golpes: boolean | null;
  carroceria: CoordenadasType[];
  tanque: number | null;
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
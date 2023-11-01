import AccesoriosType from "./AccesoriosType";
import CoordenadasType from "./CoordenadasType";

export default interface DatosLlegadaType {
    isSalida:boolean |null;
    fechaLlegada: string | null;
    horaLlegada: string | null;
    kilometrajeLlegada: number | null;
    golpesLlegada: boolean | null;
    carroceriaLlegada: CoordenadasType[];
    porcentajeGasolinaLlegada: number | null;
    nombreVigilanteLlegada: string | null;
    firmaVigilanteLlegada: string | null;
    firmaSolicitanteLlegada: string | null;
    accesoriosLlegada: AccesoriosType;
    observacionesLlegada: string | null;
} 
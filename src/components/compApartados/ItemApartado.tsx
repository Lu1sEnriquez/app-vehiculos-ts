import ApartadosType from "@/models/ReporteGeneralType";
import { ReactNode } from "react";
import { ButtonAzul } from "../basicos/ButtonAzul";
import ButtonGenerarPDF from "../basicos/ButtonGenerarPDF";
import { formatFecha, formatHoraAmPm } from "@/utils/format/formatFecha";

interface Props {
  solicitud: ApartadosType;
}




function ItemApartado({ solicitud }: Props) {

const fechaSalida = new Date(solicitud.fechaSalida)
const fechaLlegada = new Date(solicitud.fechaLlegada)

  const fechaSalidaFormat =formatFecha(fechaSalida)
  const horaSalidaFormat = formatHoraAmPm(fechaSalida);
 
  const fechaLlegadaFormat =formatFecha(fechaLlegada)
  const horaLlegadaFormat = formatHoraAmPm(fechaLlegada);

  return (
    <div
      
      className="min-w-[400px]   w-full md:w-80 lg:w-full max-w-[600px] overflow-hidden bg-slate-50 h-[200px] shadow-xl rounded-md text-black "
    >
      <header className=" w-full h-16 p-3 gap-2   flex flex-row justify-between">
        <div className="flex flex-col min-w-[150px] ">
          <h1>Folio: {solicitud.idSolicitud} </h1>
          <h1>Salida: {fechaSalidaFormat}</h1>
        </div>
        <div className="flex flex-col items-center  ">
          <h1 className=" w-full flex ">
            Destino: <p className="truncate"> {solicitud.destino}</p>
          </h1>
          <h1>Llegada: {fechaLlegadaFormat}</h1>
        </div>
      </header>
      <div className=" w-full h-14  pl-3 gap-2  flex flex-col  justify-center">
        <div className="flex flex-row gap-2">
          <h1 className="flex flex-row">Solicitante:</h1>
          <p> {solicitud.nombreSolicitante}</p>
        </div>
        <div className="flex flex-row  gap-2">
          <h1 className="flex flex-row">Chofer:</h1>
          <p> {solicitud.chofer}</p>
        </div>
      </div>
      <div className="pl-3  w-full flex flex-row h-20 truncate   ">
        <div>
          <div className="flex flex-row gap-2 ">
            <h1 className="flex flex-row">Vehiculos :</h1>
            <p> {solicitud.vehiculo}</p>
          </div>
          <div className="flex flex-row gap-2 ">
            <h1 className="flex flex-row">Placa :</h1>
            <p> {solicitud.placa}</p>
          </div>
        </div>
        <footer className="flex w-full justify-end pr-4">
          <div
            className={`w-[150px] rounded-xl flex justify-center items-center text-base text-blanco h-12 justify-self-end
              ${
                solicitud.estado == "Pendiente"
                  ? "bg-orangePendiente"
                  : solicitud.estado == "Circulacion"
                  ? "bg-bluePrimary"
                  : "bg-greenSuccess"
              }`}
          >
            {solicitud.estado}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ItemApartado;

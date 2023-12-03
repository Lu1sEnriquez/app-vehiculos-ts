import ApartadosType from "@/models/ReporteGeneralType";
import { ButtonAzulLink } from "../basicos/ButtonAzul";
import { formatFecha, formatHoraAmPm } from "@/utils/format/formatFecha";
import { PiKeyReturnBold } from "react-icons/pi";

interface Props {
  solicitud: ApartadosType;
}
function ItemLlegada({ solicitud }: Props) {
  const fechaSalida = new Date(solicitud.fechaSalida);
  const fechaLlegada = new Date(solicitud.fechaLlegada);

  // Función para formatear la fecha en formato de 12 horas con "am" y "pm"

  const fechaLlegadaFormat = formatFecha(fechaLlegada);
  const horaLlegadaFormat = formatHoraAmPm(fechaLlegada);

  return (
    <div className="min-w-[400px]  animate-fade-down animate-duration-300  w-full  lg:w-full max-w-[600px] overflow-hidden bg-slate-50 h-[200px] shadow-xl rounded-md text-black ">
      <header className=" w-full h-16 p-3 gap-2   flex flex-row justify-between">
        <div className="flex flex-col min-w-[150px] ">
          <h1>Folio: {solicitud.idSolicitud} </h1>
          <h1>Llegada: {fechaLlegadaFormat}</h1>
        </div>
        <div className="flex flex-col items-center  ">
          <h1 className=" w-full flex ">
            Destino: <p className="truncate"> {solicitud.destino}</p>
          </h1>
          <h1>Hora: {horaLlegadaFormat}</h1>
        </div>
      </header>
      <div className=" w-full h-20  pl-3 gap-2  flex flex-col  justify-center">
        <div className="flex flex-row gap-2">
          <h1 className="flex flex-row">Responsable: </h1>
          <p> {solicitud.responsable}</p>
        </div>
        <div className="flex flex-row gap-2">
          <h1 className="flex flex-row">Entregado a: </h1>
          <p> {solicitud.solicitante}</p>
        </div>
        <div className="flex flex-row  gap-2">
          <h1 className="flex flex-row">Chofer:</h1>
          <p> {solicitud.chofer}</p>
        </div>
      </div>
      <footer className="pl-3  w-full flex flex-row h-20 truncate   ">
        <div className="w-1/2 truncate">
          <div className="flex flex-row gap-2 ">
            <h1 className="flex flex-row">Vehiculos :</h1>
            <p> {solicitud.vehiculo}</p>
          </div>
          <div className="flex flex-row gap-2  ">
            <h1 className="flex flex-row ">Placa :</h1>
            <p> {solicitud.placa}</p>
          </div>
        </div>
        <div className="flex w-1/2 justify-end pr-4 ">
          <ButtonAzulLink
            href={`/llegadas/${solicitud.idSolicitud}`}
            text="REGISTRAR"
          >
            <PiKeyReturnBold size={25} />
          </ButtonAzulLink>
        </div>
      </footer>
    </div>
  );
}

export default ItemLlegada;

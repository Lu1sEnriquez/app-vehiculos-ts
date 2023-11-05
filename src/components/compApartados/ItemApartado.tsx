import ReporteGeneralType from "@/models/ReporteGeneralType";
import { ReactNode } from "react";
import { ButtonAzul } from "../basicos/ButtonAzul";
import ButtonGenerarPDF from "../basicos/ButtonGenerarPDF";

interface Props {
  solicitud: ReporteGeneralType;
}
function ItemApartado2({ solicitud }: Props) {
  return (
    <tr className=" overflow-hidden text-ellipsis border-b-4 border-slate-200 hover:bg-gray-100 transition-colors   bg-slate-50 rounded-lg shadow-xl 
    flex-row justify-between  ">
      <td className="py-3 w-1/6 flex flex-row px-1 sm:px-10 border-2  ">
        {solicitud.idSolicitud}
      </td>
      <td className="py-3 w-1/6 px-1 flex-wrap">
        {solicitud.nombreSolicitante}
      </td>
      <td className="py-3 w-1/6 px-1  flex-wrap hidden sm:visible">
        {solicitud.chofer}
      </td>
      <td className="py-3 w-1/6 px-1 flex-wrap">{solicitud.destino}</td>
      <td className="py-3 w-1/6 px-1 flex-wrap">{solicitud.vehiculo}</td>
      <td className="py-3 w-1/6 px-1 flex-wrap hidden ">{solicitud.placa}</td>
      <td className="py-3 w-1/6 px-1  flex-wrap">{solicitud.fechaSalida}</td>
      <td className="py-3 w-1/6 px-1  flex-wrap">{solicitud.fechaLlegada}</td>
      <td className="py-3  px-1 sm:w-1/12   justify-center">
        <ButtonGenerarPDF id={solicitud.idSolicitud} />
      </td>
    </tr>
  );
}

export default ItemApartado2;

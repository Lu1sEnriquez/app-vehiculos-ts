import ReporteGeneralType from "@/models/ReporteGeneralType";
import { ReactNode } from "react";
import { ButtonAzul } from "../basicos/ButtonAzul";
import ButtonGenerarPDF from "../basicos/ButtonGenerarPDF";

interface Props {
  solicitud: ReporteGeneralType;
}

function ItemApartado({ solicitud }: Props) {
  return (
    <div className="w-full p-2 font-Poppins   flex flex-col  border-2   border-black text-slate-300  rounded-xl shadow-xl">
      <div id="row1" className="  w-full flex justify-between  ">
        <div className=" w-full flex flex-row">
          <h6 className="font-bold">Folio : </h6>
          <p className="text-slate-400 font-medium">{solicitud.idSolicitud}</p>
        </div>
        <div className=" w-full flex flex-col">
          <h6 className="font-bold">Fecha Salida: </h6>{" "}
          <p className="text-slate-400 font-medium">{solicitud.fechaSalida}</p>
        </div>
        <div className=" w-full flex flex-col">
          <h6 className="font-bold">Fecha Llegada: </h6>{" "}
          <p className="text-slate-400 font-medium">{solicitud.fechaLlegada}</p>
        </div>
      </div>
      <div id="row2" className="  w-full flex justify-between">
        <div className=" w-full flex flex-col">
          <h6 className="font-bold">Solicitante: </h6>
          <p className="text-slate-400 font-medium">{solicitud.nombreSolicitante}</p>
        </div>
        <div className=" w-full flex flex-col">
          <h6 className="font-bold">Chofer: </h6> <p className="text-slate-400 font-medium">{solicitud.chofer}</p>
        </div>
        <div className=" w-full flex flex-col">
          <h6 className="font-bold">Vehiculo: </h6> <p className="text-slate-400 font-medium">{solicitud.vehiculo}</p>
        </div>
      </div>
      <div id="row3" className="  h-full flex justify-between">
        <div className=" w-1/3  flex flex-col">
          <h6 className="font-bold">Destino: </h6> <p className="text-slate-400 font-medium">{solicitud.destino}</p>
        </div>
        <div className=" w-1/6 flex flex-col">
          <h6 className="font-bold">Estatus: </h6>
          <p className="text-slate-400 font-medium"> {solicitud.estadoSolicitud}</p>
        </div>
        <div className=" w-3/6 flex justify-center items-center">
          <ButtonGenerarPDF id={solicitud.idSolicitud}></ButtonGenerarPDF>
        </div>
      </div>
    </div>
  );
}
export default ItemApartado;

import SolicitudApartadoType from "@/models/SolicitudApartadoType"
import { ReactNode } from "react"

interface Props{
  solicitud:SolicitudApartadoType
}

function ItemApartados({solicitud}:Props) {
  return (
    <div
             
              className="w-full flex flex-col border-4 object-fill  text-xl border-azulOscuro text-black h-40 rounded-xl"
            >
              <div
                id="row1"
                className="border-2  w-full h-full flex justify-between "
              >
                <div className=" w-full flex flex-row"><h6 className="font-semibold">Folio :</h6> {solicitud.idSolicitud}</div>
                <div className=" w-full flex flex-row"><h6 className="font-semibold">Fecha Salida :</h6> {solicitud.fechaSalida}</div>
                <div className=" w-full flex flex-row"><h6 className="font-semibold">Fecha Llegada :</h6> {solicitud.fechaLlegada}</div>
              </div>
              <div
                id="row2"
                className="border-2  w-full h-full flex justify-between"
              >
                <div className=" w-full flex flex-row"><h6 className="font-semibold">Solicitante : </h6> {solicitud.nombreSolicitante}</div>
                <div className=" w-full flex flex-row"><h6 className="font-semibold">Vehiculo : </h6> {solicitud.Vehiculo}</div>
                <div className=" w-full flex flex-row"><h6 className="font-semibold">Chofer : </h6> {solicitud.chofer}</div>
              </div>
              <div
                id="row3"
                className="border-2  w-full h-full flex justify-between"
              >
                <div className=" w-2/3  flex flex-row"><h6 className="font-semibold">Destino : </h6> {solicitud.destino}</div>
                <div className=" "> {}</div>
                <div className=" w-1/3 flex flex-row"><h6 className="font-semibold">Estatus : </h6> {solicitud.status}</div>
              </div>
            </div>
  )
}
export default ItemApartados
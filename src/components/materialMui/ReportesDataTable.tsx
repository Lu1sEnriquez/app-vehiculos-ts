"use client";
import MUIDataTable from "mui-datatables";
import ApartadosType, {
  ReporteType,
  estadoType,
} from "@/models/ReporteGeneralType";
import ButtonGenerarPDF from "../basicos/ButtonGenerarPDF";
import { useEffect, useState } from "react";
import { reportesGeneralGet } from "@/services/reportes.services";
import { useErrorReducer } from "@/reducer/errorReducer";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GenerarReportePDF } from "@/utils/PDF/ReporteMensual/generarReporteMensual";
import { formatFecha } from "@/utils/format/formatFecha";
// Definición de tipos para las columnas y los datos
type Column = keyof ApartadosType; // Obtén las claves de las propiedades de un elemento de "solicitudes"

const columns: Column[] = [
  "destino",
  "vehiculo",
  "placa",
  "fechaRegistro",
  "fechaSalida",
  "fechaLlegada",
  "estadoSolicitud",
  "chofer",
  "nombreSolicitante",
];

const fechaActual = new Date();

const inicioDelMes = new Date(
  fechaActual.getFullYear(),
  fechaActual.getMonth(),
  1
);
const finDelMes = new Date(
  fechaActual.getFullYear(),
  fechaActual.getMonth() + 1,
  0
);

interface filterDateInitialType {
  inicioDelMes: string;
  finDelMes: string;
}
const filterDateInitial = {
  inicioDelMes: formatFecha(inicioDelMes),
  finDelMes:formatFecha(finDelMes),
};
function ReportesDataTable() {
  const [data, setData] = useState<ApartadosType[]>([]);
  const [filterDate, setfilterDate] = 
    useState<filterDateInitialType>(filterDateInitial);

  const { dispatch } = useErrorReducer();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await reportesGeneralGet(
          new Date(filterDate.inicioDelMes),
          new Date(filterDate.finDelMes)
        );
        console.log(result);

        if (Array.isArray(result)) {
          setData(result);
        }
      } catch (error) {
        dispatch({
          type: "SET_ERROR",
          payload: error.message || "Error Desconocido",
        });
        setData([])
      }
    };

    fetchData();
  }, [dispatch, filterDate]);

  return (
    <div className="w-full md:pl-10 animate-fade-down font-nunito-sans text-base font-semibold">
      {data && (
        <MUIDataTable
          key={data.length}
          title={"Lista De Reportes Vehiculos"}
          data={data.map((solicitud) => {
            return {
              folio: solicitud.idSolicitud,
              solicitante: solicitud.nombreSolicitante,
              vehiculo: solicitud.vehiculo,
              // chofer:solicitud.chofer,
              salida: solicitud.fechaSalida,
              llegada: solicitud.fechaLlegada,
              destino: solicitud.destino || "Local",
              estado: solicitud.estado,
            };
          })}
          columns={[
            {
              name: "folio",
              label: "Folio",
            },
            {
              name: "solicitante",
              label: "Solicitante",
            },
            {
              name: "vehiculo",
              label: "Vehiculo",
            },
            {
              name: "salida",
              label: "Salida",
            },
            {
              name: "llegada",
              label: "Llegada",
            },
            {
              name: "destino",
              label: "Destino",
            },
            {
              name: "estado",
              label: "estado",
            },
          ]}
          options={{
            downloadOptions: {
              filename: "Reporte General",
              filterOptions: {
                useDisplayedColumnsOnly: true,
                useDisplayedRowsOnly: true,
              },
              separator: " , ",
            },
            download: "true",

            customToolbar(data) {
              const dataReporte = data.displayData.map((row): ReporteType => {
                const data = row.data;
                return {
                  Folio: data[0] as number,
                  Solicitante: data[1] as string,
                  Vehiculo: data[2] as string,
                  FechaSalida: data[3].slice(0, 10) as string,
                  HoraSalida: data[3].slice(11, 16) as string,
                  FechaLlegada: data[4].slice(0, 10) as string,
                  HoraLlegada: data[4].slice(11, 16) as string,
                  Destino: data[5] as string,
                  Estado: data[6] as estadoType,
                };
              });

              const handleDiaInicio = (
                e: React.ChangeEvent<HTMLInputElement>
              ) => {
                setfilterDate({
                  ...filterDate,
                  inicioDelMes:e.target.value
                });
              };
              const handleDiaFin = (e: React.ChangeEvent<HTMLInputElement>) => {
                setfilterDate({
                  ...filterDate,
                  finDelMes: e.target.value,
                });
              };

              return (
                <div className="  w-full hover:cursor-pointer flex  items-center font-nunito-sans font-semibold">
                  <div className=" w-full flex flex-row gap-5 justify-center items-center">
                    <h3>Fecha Inicio: </h3>
                    <input
                      type="date"
                      onChange={handleDiaInicio}
                      className="border-2 border-slate-900 rounded"
                      value={filterDate.inicioDelMes}
                    />
                    <h3>Fecha Fin: </h3>
                    <input
                      type="date"
                      onChange={handleDiaFin}
                      className="border-2 border-slate-900 rounded"
                      value={filterDate.finDelMes}
                    />
                  </div>
                  <button
                    className="flex flex-row gap-1 items-center justify-center w-32 bg-azulNormal rounded-sm text-slate-50 p-1"
                    onClick={() => {
                      GenerarReportePDF(dataReporte);
                    }}
                  >
                    <h3 className="font-nunito-sans font-bold">REPORTE</h3>
                    <HiOutlineClipboardDocumentList size={20} />
                  </button>
                </div>
              );
            },

            customRowRender(data, dataIndex, rowIndex) {
              return (
                <tr
                  key={rowIndex}
                  className="w-full border-b-2 border-slate-300 lowercase "
                >
                  <td></td>
                  <td className="">{data[0]}</td>
                  <td className="">{data[1]}</td>
                  <td className="">{data[2]}</td>
                  <td className="">
                    <span>{data[3].slice(0, 10)}</span>
                    <span>{data[3].slice(11, 16)}</span>
                  </td>
                  <td className="">
                    <span>{data[4].slice(0, 10)}</span>
                    <span>{data[4].slice(11, 16)}</span>
                  </td>
                  <td className="">{data[5]}</td>
                  <td className="">{data[6]}</td>
                  <td className="w-full flex justify-center items-center ">
                    <ButtonGenerarPDF id={parseInt(data[0])} />
                  </td>
                </tr>
              );
            },
          }}
        ></MUIDataTable>
      )}
    </div>
  );
}

export default ReportesDataTable;

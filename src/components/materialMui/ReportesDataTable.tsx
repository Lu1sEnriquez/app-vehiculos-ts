"use client";
import MUIDataTable from "mui-datatables";
import ApartadosType, {
  ReporteType,
  estadoType,
} from "@/models/ReporteGeneralType";
import ButtonGenerarPDF from "../basicos/ButtonGenerarPDF";
import { useEffect, useState } from "react";
import useReportes from "@/hooks/useReportes";
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
  "solicitante",
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
  finDelMes: formatFecha(finDelMes),
};
function ReportesDataTable() {
  const { reportesGeneralGet } = useReportes();

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
        ).then((data) =>
          data?.filter(
            (solicitud: ApartadosType) => solicitud.estado == "Finalizado"
          )
        );
        console.log(result);

        if (Array.isArray(result)) {
          setData(result);
        }
      } catch (error) {
        // if (error instanceof Error) {
        //   dispatch({
        //     type: "SET_ERROR",
        //     payload: error.message || "Error Desconocido",
        //   });
        // }
        setData([]);
      }
    };

    fetchData();
  }, [dispatch, filterDate]);

  return (
    <div className="w-full  animate-fade-down font-nunito-sans text-base font-semibold">
      {data && (
        <MUIDataTable
          key={data.length}
          title={"Lista De Reportes Vehiculos"}
          data={data.map((solicitud) => {
            return {
              folio: solicitud.idSolicitud,
              solicitante: solicitud.responsable,
              vehiculo: solicitud.vehiculo,
              // chofer:solicitud.chofer,

              salida: solicitud.fechaSalida.slice(0, 10),
              horaSalida: solicitud.fechaSalida.slice(11, 16),
              llegada: solicitud.fechaLlegada.slice(0, 10),
              horaLlegada: solicitud.fechaLlegada.slice(11, 16),
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
              name: "horaSalida",
              label: "Hora",
            },
            {
              name: "llegada",
              label: "Llegada",
            },
            {
              name: "horaLlegada",
              label: "Hora ",
            },
            {
              name: "destino",
              label: "Destino",
            },
            {
              name: "estado",
              label: "estado",
            },
            {
              name: "acciones",
              label: "Descargar",
              options: {
                customBodyRender: (value, tableMeta) => (
                  <div>
                    <ButtonGenerarPDF id={parseInt(tableMeta.rowData[0])} />
                  </div>
                ),
              },
            },
          ]}
          options={{
            downloadOptions: {
              filename: `Reporte-vehicular-${filterDate.inicioDelMes}-${filterDate.finDelMes}`,
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
                console.log(data[3]);

                return {
                  Folio: data[0] as number,
                  Solicitante: data[1] as string,
                  Vehiculo: data[2] as string,
                  FechaSalida: data[3], //.slice(0, 10) as string,
                  HoraSalida: data[4], //.slice(11, 16) as string,
                  FechaLlegada: data[5], //.slice(0, 10) as string,
                  HoraLlegada: data[6], //.slice(11, 16) as string,
                  Destino: data[7] as string,
                  Estado: data[8] as estadoType,
                };
              });

              const handleDiaInicio = (
                e: React.ChangeEvent<HTMLInputElement>
              ) => {
                setfilterDate({
                  ...filterDate,
                  inicioDelMes: e.target.value,
                });
              };
              const handleDiaFin = (e: React.ChangeEvent<HTMLInputElement>) => {
                setfilterDate({
                  ...filterDate,
                  finDelMes: e.target.value,
                });
              };

              return (
                <div className="   w-full hover:cursor-pointer flex flex-wrap gap-2  items-center justify-end lg:justify-between  font-nunito-sans font-semibold mb-2">
                  <div className=" w-fit flex flex-wrap gap-2 justify-end lg:justify-between items-center ">
                    <label className="flex flex-wrap gap-2">
                      Fecha Inicio:
                      <input
                        type="date"
                        onChange={handleDiaInicio}
                        className="border-2 border-slate-300 rounded"
                        value={filterDate.inicioDelMes}
                      />{" "}
                    </label>

                    <label className="flex flex-wrap gap-2">
                      Fecha Fin:
                      <input
                        type="date"
                        onChange={handleDiaFin}
                        className="border-2 border-slate-300 rounded"
                        value={filterDate.finDelMes}
                      />
                    </label>
                  </div>
                  <button
                    className="flex flex-row gap-1 items-center  justify-center w-36 bg-azulNormal rounded-sm text-slate-50 p-1  "
                    onClick={() => {
                      GenerarReportePDF(dataReporte);
                    }}
                  >
                    <label className="font-nunito-sans font-bold">
                      REPORTE
                    </label>
                    <HiOutlineClipboardDocumentList size={20} />
                  </button>
                </div>
              );
            },
          }}
        ></MUIDataTable>
      )}
    </div>
  );
}

export default ReportesDataTable;

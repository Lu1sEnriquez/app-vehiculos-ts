"use client";
import MUIDataTable from "mui-datatables";
import ApartadosType, { ReporteType, estadoType } from "@/models/ReporteGeneralType";
import ButtonGenerarPDF from "../basicos/ButtonGenerarPDF";
import { useEffect, useState } from "react";
import { reportesGeneralGet } from "@/services/reportes.services";
import { useErrorReducer } from "@/reducer/errorReducer";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GenerarReportePDF } from "@/utils/PDF/ReporteMensual/generarReporteMensual";

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

function ReportesDataTable() {
  const [data, setData] = useState<ApartadosType[]>([]);

  const { dispatch } = useErrorReducer();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await reportesGeneralGet();
        console.log(result);

        if (Array.isArray(result)) {
          setData(result);
        }
      } catch (error) {
        dispatch({
          type: "SET_ERROR",
          payload: error.message || "Error Desconocido",
        });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full md:pl-10 animate-fade-down font-nunito-sans text-base font-semibold">
      <MUIDataTable
        title={"Lista De Reportes Vehiculos"}
        data={
          data.map((solicitud) => {
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
          })
          // .filter((s) => s.estado === "Finalizado")
        }
        columns={[
          {
            name: "folio",
            label: "Folio",
          },
          {
            name: "solicitante",
            label: "Solicitante",
          },
          // {
          //   name:"chofer",
          //   label:"Chofer"
          // },

          {
            name: "vehiculo",
            label: "Vehiculo",
          },
          // {
          //   name:"fechaRegistro",
          //   label:"Registro"
          // },
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
          {
            name: "",
            label: "",
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
          expandableRows: false,

          customToolbar(data) {
            
              const dataReporte = data.displayData.map((row):ReporteType => {
                const data = row.data;
                return {
                  Folio: data[0] as number,
                  Solicitante: data[1] as string,
                  Vehiculo: data[2] as string,
                  FechaSalida: data[3].slice(0,10) as string,
                  HoraSalida: data[3].slice(11,16) as string,
                  FechaLlegada: data[4].slice(0,10) as string,
                  HoraLlegada: data[4].slice(11,16) as string,
                  Destino: data[5] as string,
                  Estado: data[6] as estadoType,
                };
              })
            

            return (
              <div className="  w-full hover:cursor-pointer flex justify-end  ">
                <button className="flex flex-row gap-1 items-center justify-center w-32 bg-azulNormal rounded-sm text-slate-50 p-1"
                onClick={()=>{
                  GenerarReportePDF(dataReporte)
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
              <tr className="w-full border-b-2 border-slate-300  lowercase ">
                <td className="w-full flex justify-center items-center ">
                  <ButtonGenerarPDF id={parseInt(data[0])} />
                </td>
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
              </tr>
            );
          },
          renderExpandableRow: (rowData, rowMeta) => {
            console.log(rowData);

            return (
              <tr className="w-full ">
                <td className="bg-green-500"></td>
                <td className="bg-red-500"></td>
                <td className="bg-green-500"></td>
                <td className="bg-red-500"></td>
                <td className="bg-green-500"></td>
                <td className="bg-red-500"></td>
                <td></td>
                <td className="w-full flex justify-center items-center bg-green-500">
                  <ButtonGenerarPDF id={parseInt(rowData[0])} />
                </td>
              </tr>
            );
          },
        }}
      ></MUIDataTable>
    </div>
  );
}

export default ReportesDataTable;

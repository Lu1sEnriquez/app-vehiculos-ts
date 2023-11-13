"use client";
import MUIDataTable from "mui-datatables";
import ApartadosType, { solicitudes } from "@/models/ReporteGeneralType";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import ButtonGenerarPDF from "../basicos/ButtonGenerarPDF";
import { useEffect, useState } from "react";
import { reportesGeneralGet } from "@/services/reportes.services";
import { apartadosGet } from "@/services/apartados.services";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reportesData = await reportesGeneralGet();
        console.log(reportesData);
        
        if (Array.isArray(reportesData)) {
          setData(reportesData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error as needed
      }
      
    };

    fetchData();
    console.log(data);
    
  }, []);

  return (
    <div className="w-full md:pl-10">
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
          expandableRows: true,
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

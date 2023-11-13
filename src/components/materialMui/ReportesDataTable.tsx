"use client";
import MUIDataTable from "mui-datatables";
import ApartadosType, { solicitudes } from "@/models/ReporteGeneralType";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
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
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await reportesGeneralGet();
        console.log(result);

        if (Array.isArray(result)) {
          setData(result);
        }else{
          setError(`${result}`)
        }
      } catch (error) {
        // console.error("Error fetching data:", error);
        // Handle error as needed
        setError(`${error}`)
        // setData(solicitudes)
      }
    };

    fetchData();
    console.log(data);
  }, []);

  return (
    <div className="w-full md:pl-10">
      {error &&(
        <Stack spacing={2}>
          <Alert variant="filled" severity="error" >
            <AlertTitle>No Hay Datos para Mostrar</AlertTitle>
          </Alert>
        </Stack>
      )}
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
            name:"",
            label:""
          }
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

          customRowRender(data, dataIndex, rowIndex) {
            return (
              <tr className="w-full  ">
                <td className=""></td>
                <td className="">{data[0]}</td>
                <td className="">{data[1]}</td>
                <td className="">{data[2]}</td>
                <td className="">{data[3]}</td>
                <td className="">{data[4]}</td>
                <td className="">{data[5]}</td>
                <td className="">{data[6]}</td>
                <td className="w-full flex justify-center items-center ">
                  <ButtonGenerarPDF id={parseInt(data[0])} />
                </td>
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

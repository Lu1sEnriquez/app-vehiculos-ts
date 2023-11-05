'use client'
import MUIDataTable from "mui-datatables";
import { solicitudes } from "@/models/ReporteGeneralType";

// Definición de tipos para las columnas y los datos
type Column = keyof typeof solicitudes[0]; // Obtén las claves de las propiedades de un elemento de "solicitudes"
type Data = typeof solicitudes[0][];

const columns: Column[] = [
  "idSolicitud",
  "nombreSolicitante",
  "chofer",
  "destino",
  "vehiculo",
  "placa",
  "fechaRegistro",
  "fechaSalida",
  "fechaLlegada",
  "estadoSolicitud",
];

const data: Data = solicitudes;

const options = {
  filterType: 'checkbox',
};

function ReportesDataTable() {
  return (
    <MUIDataTable
      title={"Lista de empleados"}
      data={data}
      columns={columns}
      options={{filterType:"checkbox"}}
    ></MUIDataTable>
  );
}

export default ReportesDataTable;
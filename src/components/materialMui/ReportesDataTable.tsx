'use client'
import MUIDataTable from "mui-datatables";
import { solicitudes } from "@/models/ReporteGeneralType";

// Definición de tipos para las columnas y los datos
type Column = keyof typeof solicitudes[0]; // Obtén las claves de las propiedades de un elemento de "solicitudes"
type Data = typeof solicitudes[0][];

const columns: Column[] = [
 
  "destino",
  "vehiculo",
  "placa",
  "fechaRegistro",
  "fechaSalida",
  "fechaLlegada",
  "estadoSolicitud",
];

const data: Data = solicitudes;



function ReportesDataTable() {
  return (
    <div className="w-full md:pl-10">
      <MUIDataTable
      title={"Lista De Reportes Vehiculos"}
      data={data}
      columns={[
        {
          name:"idSolicitud",
          label:"Folio"
        },
        {
          name:"nombreSolicitante",
          label:"Solicitante"
        },
        {
          name:"chofer",
          label:"Chofer"
        },
        {
          name:"destino",
          label:"Destino"
        },
        {
          name:"vehiculo",
          label:"Vehiculo"
        },
        {
          name:"fechaRegistro",
          label:"Registro"
        },
        {
          name:"fechaSalida",
          label:"Salida"
        },
        {
          name:"fechaLlegada",
          label:"Llegada"
        },
        {
          name:"estadoSolicitud",
          label:"estado"
        },
        
      ]}
      options={{filterType:"checkbox"}}
      
    ></MUIDataTable>
    </div>
  );
}

export default ReportesDataTable;
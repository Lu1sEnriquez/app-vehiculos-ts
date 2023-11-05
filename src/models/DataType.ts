import datosSalidaLlegadaType from "./DatosSalidaLlegada";
import ReporteGeneralType from "./ReporteGeneralType";



//en caso de que la data cambie del fetch aqui se agregaran los nuevos tipos
export default interface DataType {
    error:string,
    data: string | ReporteGeneralType | datosSalidaLlegadaType
}

export function mapResponseToReporteGeneral(responseData: DataType): ReporteGeneralType[] {
    if (Array.isArray(responseData.data)) {
      // Si responseData.data es un arreglo, mapea sus elementos a ReporteGeneralType
      return responseData.data.map((item: any) => {
        return {
          idSolicitud: item.idSolicitud,
          nombreSolicitante: item.nombreSolicitante,
          chofer: item.chofer,
          destino: item.destino,
          vehiculo: item.vehiculo,
          placa: item.placa,
          fechaRegistro: item.fechaRegistro,
          fechaSalida: item.fechaSalida,
          fechaLlegada: item.fechaLlegada,
          estadoSolicitud: item.estadoSolicitud,
        };
      });
    } else {
      // En caso contrario, retorna un arreglo vacío
      return [];
    }
  }
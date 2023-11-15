import ApartadosType, { ReporteType } from "@/models/ReporteGeneralType";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logoItson from '@/assets/icons/LogoItson.png'
import { generarCoordenadas } from "../ReporteEntradaSalida/generarReporteEntradaSalidaPDF";
import { formatFecha } from "@/utils/format/formatFecha";
export async function GenerarReportePDF(data: ReporteType[]) {
    type ColumnsType = keyof ReporteType;
    const columns: ColumnsType[] =
        ["Folio", "Solicitante", 'Vehiculo', "FechaSalida", "FechaLlegada", "Destino", "Estado"];

    const matriz = data.map(r => [
        `${r.Folio}`,
        r.Solicitante,
        r.Vehiculo,
        `${r.FechaSalida} ${r.HoraSalida}`,
        `${r.FechaLlegada} ${r.HoraLlegada}`,
        r.Destino,
        r.Estado,
    ]);

    const fecha = new Date()
    const fechaFormat = formatFecha(fecha)

    const doc = new jsPDF();
    
    // Cargar y configurar la fuente Poppins
    //   const fontData = await Poppins.load();
    //   doc.addFileToVFS('Poppins-Bold.ttf', fontData);
    //   doc.addFont('Poppins-Bold.ttf', 'Poppins-Bold', 'Bold');
    //   doc.setFont('Poppins-Bold');
// generarCoordenadas(doc)
    doc.setTextColor("#026ab1");
    doc.setFontSize(20);
    doc.setFont('helvetica','normal','bold')
    doc.text('REPORTE VEHICULAR', 60, 15);
    
    doc.addImage(logoItson.src,'png',160,5,30,10)
    doc.setFontSize(10)
    doc.setTextColor("#0A0A0A");

    doc.text(fechaFormat,170,20)
    doc.setTextColor("#000000");
    
    autoTable(doc, {
        startY: 30,
        head: [columns],
        body: matriz,
    });

    doc.save(`Reporte-Vehicular-${fechaFormat}`);
}
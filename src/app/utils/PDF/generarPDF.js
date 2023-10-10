import jsPDF from 'jspdf';
import formatoPart1 from './image/ReporteEntradaSalidaPart1.png'; // Asegúrate de que la ruta sea correcta
import formatoPart2 from './image/ReporteEntradaSalidaPart2.png'; // Asegúrate de que la ruta sea correcta





function generarPDF(data) {

 
  // Crear un nuevo documento PDF
  const doc = new jsPDF({
    format:'a4',
    orientation:'p',
    
  });



  // Agregar la imagen al PDF
  doc.addImage(formatoPart1.src, 'PNG', -10, 0, 240, 350); // Ejemplo de cómo agregar la imagen al PDF
  
   //agregar puntos en y
   doc.setFontSize(5)
   doc.setTextColor(255, 0, 0);
   for (let y = 0; y <= 300; y=y+10) {
     
     for (let x = 0; x <=200; x=x+10) {
       doc.circle(x,y,.2)
       doc.text(x+" "+y,x-3,y+2)
     }    
   }
   doc.setTextColor(0, 0, 0);
   doc.setFontSize(10)
   doc.text(data.folio,60, 65)
   doc.text(data.fechaSalida,52, 75 )
   doc.text(data.nombreCompleto,52, 85)
   doc.text(data.placas,70,95)
   doc.text(data.horaSalida,65,104)
   doc.text(data.kilometraje,70,114 )
   
   doc.rect(30,130,50,30)
  doc.addImage(car,'PNG',30,130,50,30)
   doc.rect(130,130,50,30)
   doc.addImage(car,'PNG',130,130,50,30)
  
  
   //pagina 2
   doc.addPage();
   doc.addImage(formatoPart2.src, 'PNG', -10, 0, 240, 350); // Agrega la imagen al comienzo de la segunda página
 
 


  // Guardar el PDF o ofrecerlo para su descarga
  doc.save('mi_documento.pdf');

}

export default generarPDF;
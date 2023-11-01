import jsPDF from 'jspdf';
import { datosSalidaEntradaType } from '@/reducer/salidaEntradaReducer';


import formatoPart1 from './ReporteEntradaSalidaPart1.png'; // Asegúrate de que la ruta sea correcta
import formatoPart2 from './ReporteEntradaSalidaPart2.png'; // Asegúrate de que la ruta sea correcta
import iconFalse from '../icons/icons8-eliminar-48.png'
import iconTrue from '../icons/icons8-emoji-de-marca-de-verificación-48.png'
import imgCar from "@/assets/icons/auto.png"

import { generateImageWithCoordinates } from '../../canvas/generateCarImg';
import { generarMarcadorGasolina } from '../../canvas/generateMarcadorPng';


function generarCoordenadas(doc: jsPDF) {
  //agregar puntos en y
  doc.setFontSize(5)
  doc.setTextColor(255, 0, 0);
  for (let y = 0; y <= 300; y = y + 10) {

    for (let x = 0; x <= 200; x = x + 10) {
      doc.circle(x, y, .2)
      doc.text(x + " " + y, x - 3, y + 2)
    }
  }
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10)
}



export async function GenerarPDF(data: datosSalidaEntradaType) {


  // Crear un nuevo documento PDF
  const doc = new jsPDF({
    format: 'a4',
    orientation: 'p',

  });



  const imagesPromises: Promise<void>[] = [];

  if (data.golpesSalida) {
    imagesPromises.push(
      generateImageWithCoordinates(data.carroceriaSalida, imgCar).then((carSalida) => {
        return new Promise((resolve) => {
          doc.addImage(carSalida, 'PNG', 35, 150, 50, 30, '', 'FAST');
          generarCoordenadas(doc);
          resolve();
        });
      })
    );
  }else{
    doc.addImage(imgCar.src, 'PNG', 35, 150, 50, 30, '', 'FAST')
  }
  
  if (data.golpesLlegada) {
    imagesPromises.push(
      generateImageWithCoordinates(data.carroceriaSalida, imgCar).then((carSalida) => {
        return new Promise((resolve) => {
          doc.addImage(carSalida, 'PNG', 130, 150, 50, 30, '', 'FAST')
          resolve();
        });
      })
    );
  }else{
    doc.addImage(imgCar.src, 'PNG', 130, 150, 50, 30, '', 'FAST')
  }
  
  if (data.porcentajeGasolinaSalida) {
    imagesPromises.push(
      generarMarcadorGasolina(data.porcentajeGasolinaSalida).then((img) => {
        return new Promise((resolve) => {
          doc.addImage(img, 40, 205, 40, 20, '', 'FAST')
          resolve();
        });
      })
    );
  }
  
  if (data.porcentajeGasolinaLlegada) {
    imagesPromises.push(
      generarMarcadorGasolina(data.porcentajeGasolinaLlegada).then((img) => {
        return new Promise((resolve) => {
          doc.addImage(img, 135, 205, 40, 20, '', 'FAST')
          resolve();
        });
      })
    );
  }
  // Agregar la imagen al PDF
  doc.addImage(formatoPart1.src, 'PNG', -10, 0, 240, 350, '', 'FAST'); // Ejemplo de cómo agregar la imagen al PDF
  // generarCoordenadas(doc)


  if (data.folio) {
    doc.text(data.folio, 60, 71)
  }
  if (data.fechaSalida) {
    doc.text(data.fechaSalida, 52, 82)
  }
  if (data.fechaLlegada) {
    doc.text(data.fechaLlegada, 148, 82)
  }

  if (data.nombreSolicitante) {
    doc.text(data.nombreSolicitante, 52, 91)
  }

  if (data.placa) {
    doc.text(data.placa, 70, 100)
  }
  if (data.vehiculo) {
    doc.text(data.vehiculo, 140, 100)
  }
  if (data.departamento) {
    doc.text(data.departamento, 160, 91)
  }

  if (data.horaSalida) {
    doc.text(data.horaSalida, 65, 110)
  }
  if (data.horaLlegada) {
    doc.text(data.horaLlegada, 155, 110)
  }

  if (data.kilometrajeSalida) {
    doc.text(`${data.kilometrajeSalida}`, 70, 120)
  }
  if (data.kilometrajeLlegada) {
    doc.text(`${data.kilometrajeLlegada}`, 170, 120)
  }

  if (data.licencia) {
    doc.text(`${data.licencia}`, 40, 130)
  }
  if (data.chofer) {
    doc.text(`${data.chofer}`, 140, 130)
  }




  doc.rect(35, 150, 50, 30) // rectangulo carSalida
  doc.rect(130, 150, 50, 30) // rectangulo carLlegada

  // Usar Promise.all para esperar a que todas las imágenes se carguen
  Promise.all(imagesPromises).then(async () => {
    // Aquí puedes realizar acciones después de que todas las imágenes se hayan cargado

    // doc.addImage(carLlegada, 'PNG', 130, 130, 50, 30)
    //pagina 2
    doc.addPage();
    doc.addImage(formatoPart2.src, 'PNG', -10, 0, 240, 350, '', 'FAST'); // Agrega la imagen al comienzo de la segunda página 
    // generarCoordenadas(doc)
    
    if (data.nombreVigilanteSalida) {
      doc.text(data.nombreVigilanteSalida, 52, 69);
    }
    if (data.nombreVigilanteLlegada) {
      doc.text(data.nombreVigilanteLlegada, 150, 69);
    }


    if (data.firmaVigilanteSalida) {
      doc.addImage(data.firmaVigilanteSalida, 'PNG', 52, 85, 50, 25, '', 'FAST');
    }
    if (data.firmaVigilanteLlegada) {
      doc.addImage(data.firmaVigilanteLlegada, 'PNG', 145, 85, 50, 25, '', 'FAST');
    }

    if (data.firmaSolicitanteSalida) {
      doc.addImage(data.firmaSolicitanteSalida, 'PNG', 52, 120, 50, 25, '', 'FAST');
    }
    if (data.firmaSolicitanteLlegada) {
      doc.addImage(data.firmaSolicitanteLlegada, 'PNG', 145, 120, 50, 25, '', 'FAST');
    }

    if (data.destino) {

      (data.destino == "LOCAL") ? doc.addImage(iconTrue.src, 'PNG', 150, 160, 5, 5, '', 'FAST')
        : doc.addImage(iconTrue.src, 'png', 178, 160, 5, 5, '', 'FAST')
    }




    if (data.accesoriosSalida) {

      data.accesoriosSalida.gato ? doc.addImage(iconTrue.src, 'png', 40, 179, 5, 5, '', 'FAST')
        : doc.addImage(iconFalse.src, 'png', 40, 180, 5, 5, '', 'FAST');

      data.accesoriosSalida.extra ? doc.addImage(iconTrue.src, 'png', 40, 188, 5, 5, '', 'FAST')
        : doc.addImage(iconFalse.src, 'png', 40, 188, 5, 5, '', 'FAST');

      data.accesoriosSalida.cables ? doc.addImage(iconTrue.src, 'png', 40, 197, 5, 5, '', 'FAST')
        : doc.addImage(iconFalse.src, 'png', 40, 197, 5, 5, '', 'FAST');

      data.accesoriosSalida.luzMuerta ? doc.addImage(iconTrue.src, 'png', 40, 206, 5, 5, '', 'FAST')
        : doc.addImage(iconFalse.src, 'png', 40, 206, 5, 5, '', 'FAST');

      data.accesoriosSalida.extintor ? doc.addImage(iconTrue.src, 'png', 40, 215, 5, 5, '', 'FAST')
        : doc.addImage(iconFalse.src, 'png', 40, 215, 5, 5, '', 'FAST');

      data.accesoriosSalida.extintor ? doc.addImage(iconTrue.src, 'png', 40, 224, 5, 5, '', 'FAST')
        : doc.addImage(iconFalse.src, 'png', 40, 224, 5, 5, '', 'FAST');

    }
    if (data.accesoriosLlegada) {

      data.accesoriosLlegada.gato ? doc.addImage(iconTrue.src, 'png', 52, 179, 5, 5, '', 'FAST')
        : doc.addImage(iconFalse.src, 'png', 52, 180, 5, 5, '', 'FAST');

      data.accesoriosLlegada.extra ? doc.addImage(iconTrue.src, 'png', 52, 188, 5, 5, '', 'FAST')
        : doc.addImage(iconFalse.src, 'png', 52, 188, 5, 5, '', 'FAST');

      data.accesoriosLlegada.cables ? doc.addImage(iconTrue.src, 'png', 52, 197, 5, 5, '', 'FAST')
        : doc.addImage(iconFalse.src, 'png', 52, 197, 5, 5, '', 'FAST');

      data.accesoriosLlegada.luzMuerta ? doc.addImage(iconTrue.src, 'png', 52, 206, 5, 5, '', 'FAST')
        : doc.addImage(iconFalse.src, 'png', 52, 206, 5, 5, '', 'FAST');

      data.accesoriosLlegada.extintor ? doc.addImage(iconTrue.src, 'png', 52, 215, 5, 5, '', 'FAST')
        : doc.addImage(iconFalse.src, 'png', 52, 215, 5, 5, '', 'FAST');

      data.accesoriosLlegada.extintor ? doc.addImage(iconTrue.src, 'png', 52, 224, 5, 5, '', 'FAST')
        : doc.addImage(iconFalse.src, 'png', 52, 224, 5, 5, '', 'FAST');

    }


    if (data.observacionesSalida) {
      doc.text(data.observacionesSalida, 75, 183, { maxWidth: 120, lineHeightFactor: 2 })
    }

    if (data.observacionesLlegada) {
      doc.text(data.observacionesLlegada, 75, 210, { maxWidth: 120, lineHeightFactor: 2 })
    }



    // Guardar el PDF o ofrecerlo para su descarga
    doc.save();
  });
}






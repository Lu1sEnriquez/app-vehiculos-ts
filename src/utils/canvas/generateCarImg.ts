import { drawMarks, redimensionarCoordenada } from "@/components/Formularios/inputCarroceria/CarroseriaUI";
import { CoordenadasType } from "@/reducer/salidaLlegadaReducer";
import { StaticImageData } from "next/image";

export async function generateImageWithCoordinates(coordenadas: CoordenadasType[], imgCar: StaticImageData) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // Cargar la imagen de fondo (imgCar)
  const backgroundImage = new Image();
  backgroundImage.src = imgCar.src;
  await new Promise((resolve) => {
    
    backgroundImage.onload = resolve;
  })

  // Establecer el tamaño del canvas para que coincida con la imagen de fondo
  canvas.width = backgroundImage.width;
  canvas.height = backgroundImage.height;

  // Dibujar las coordenadas en el canvas utilizando backgroundImage

  if (ctx && coordenadas && backgroundImage) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx?.drawImage(backgroundImage,0,0)
    ctx.strokeStyle = "red";
    ctx.lineWidth = 25;
    
    coordenadas.forEach((marca) => {
      if (backgroundImage) {
        const newCoordenadas = redimensionarCoordenada(
          marca,
          Number(marca.widthOriginal),
          Number(marca.heightOriginal),
          backgroundImage.width,
          backgroundImage.height
        );

        if (newCoordenadas.x && newCoordenadas.y) {
          ctx.beginPath();
          ctx.moveTo(newCoordenadas.x - 50, newCoordenadas.y - 50);
          ctx.lineTo(newCoordenadas.x + 50, newCoordenadas.y + 50);
          ctx.moveTo(newCoordenadas.x - 50, newCoordenadas.y + 50);
          ctx.lineTo(newCoordenadas.x + 50, newCoordenadas.y - 50);
          ctx.stroke();
        }
      }
    });

  }
  // Convertir el canvas en una URL de imagen
  const imageDataURL = canvas.toDataURL('image/png');

  return imageDataURL; // Devuelve la URL de la imagen en formato de datos base64
}
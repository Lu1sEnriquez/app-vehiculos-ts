import marcadorGasolina from "@/assets/icons/MarcadorGasolina.png";

export async function generarMarcadorGasolina(porcentaje:number = 0) {
  const canvas = document.createElement("canvas");
  const img = new Image();
  img.src = marcadorGasolina.src;

  await new Promise((resolve) => {
    img.onload = resolve;
  });
  const porcentajeGrados = porcentaje * 1.8 - 180;

  const anguloRadianes = (porcentajeGrados * Math.PI) / 180;

  const escala = 0.3; // Cambia este valor para ajustar la escala (0.5 reducirá a la mitad, 2 duplicará el tamaño)

  img.width = img.width * escala; // Cambia el ancho de la imagen
  img.height = img.height * escala; // Cambia el alto de la imagen

  canvas.height = img.height;
  canvas.width = img.width;
  canvas.style.border = "2px solid black";
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.drawImage(img, 0, 0, img.width, img.height); // Asegúrate de especificar el ancho y alto aquí
    const height = canvas.height;
    const width = canvas.width;

    const red = 255 - porcentaje * 5.1 < 0 ? 0 : 255 - porcentaje * 5.55; // Valor de rojo decrece de 255 a 0
    const green = porcentaje * 5.1 > 230 ? 250 : porcentaje * 5.55; // Valor de verde aumenta de 0 a 255
    const porcentajeAgrados = porcentaje * 1.8 - 90;

    ctx.lineWidth = 5;
    ctx.fillStyle = `rgba(${red},${green},0,.5)`;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(
      width / 2,
      height,
      height,
      anguloRadianes,
      anguloRadianes + Math.PI,
      true
    );
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Obtén el centro del lienzo (width/2, height/2).
    const centerX = width / 2;
    const centerY = height;

    // Guarda el estado actual del contexto (opcional).
    ctx.save();

    // Aplica la traslación y rotación al contexto.
    ctx.translate(centerX, centerY); // Traslada el origen al centro del lienzo.
    ctx.rotate(anguloRadianes); // Rota el contexto por el ángulo deseado en radianes.
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(0, 0); // Mueve el lápiz al vértice superior del triángulo.
    ctx.lineTo(0, 10); // Dibuja un lado del triángulo.
    ctx.lineTo(250, 0); // Dibuja un lado del triángulo.

    ctx.moveTo(0, 0); // Mueve el lápiz al vértice superior del triángulo.
    ctx.lineTo(0, -10); // Mueve el lápiz al vértice superior del triángulo.
    ctx.lineTo(250, 0); // Dibuja un lado del triángulo.
    ctx.closePath(); // Cierra el camino.

    ctx.stroke(); // Dibuja el contorno del triángulo.
    ctx.fill(); // Rellena el triángulo.

    // Restaura el estado anterior del contexto (opcional).
    ctx.restore();
  }

  return canvas.toDataURL("image/png");
}



import html2canvas from "html2canvas";

export async function ComponentToImage(current: HTMLElement) {
  return html2canvas(current)
    .then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      return imgData;
    })
    .catch((error) => {
      // Maneja el error aquí si es necesario
      console.error("Error al capturar la imagen:", error);
      throw error; // Opcional: relanza el error si quieres propagarlo
    });
}






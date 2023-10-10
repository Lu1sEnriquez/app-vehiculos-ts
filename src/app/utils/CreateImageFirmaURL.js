
function isPadEmpty(pad) {
    return pad.isEmpty();
  }
  
  
  
  //Obtener los datos de las firmas en formato base64
  
  function CreateImageFirmaURL(pad, format) {
    if(isPadEmpty(pad)) return null
  
    const formatMap = {
      png: undefined, // Formato predeterminado (image/png)
      svg: "image/svg+xml",
      //jpeg: "image/jpeg",
    };
  
    const validFormats = Object.keys(formatMap);
  
    if (!validFormats.includes(format)) {
      throw new Error("Formato no válido");
    }
  
    return pad.toDataURL(formatMap[format]);
  }


  export default CreateImageFirmaURL

type errorKey = keyof typeof ERROR
const ERROR ={
    200: 'OK. La solicitud se completó con éxito.',
    201: 'Creado. La solicitud ha sido registrado correctamente.',
    204: 'Sin contenido. La solicitud se ha completado con éxito, pero no hay contenido para mostrar.',
    400: 'Solicitud incorrecta. Verifica los parámetros enviados.',
    401: 'No autorizado. Tu sesión ha caducado o no tienes permisos.',
    403: 'Prohibido. No tienes permisos para acceder a este recurso.',
    404: 'No encontrado. El recurso solicitado no existe.',
    405: 'Método no permitido. La solicitud utiliza un método no permitido para el recurso especificado.',
    408: 'Tiempo de espera de la solicitud. La solicitud ha superado el tiempo de espera del servidor.',
    500: 'Error interno del servidor. Por favor, inténtalo de nuevo más tarde.',
    502: 'Puerta de enlace incorrecta. El servidor actuó como una puerta de enlace o proxy y recibió una respuesta no válida del servidor ascendente.',
    503: 'Servicio no disponible. El servidor no está listo para manejar la solicitud. Inténtalo de nuevo más tarde.',
    504: 'Tiempo de espera de la puerta de enlace. La puerta de enlace no pudo obtener'
};

export async function handleAsyncError<T>(
    asyncFunction: () => Promise<T>,
    errorMessage: string
  ): Promise<T> {
    try {
      const result = await asyncFunction();
      return result;
    } catch (error) {
      console.log('Ocurrió un error:', error);
      throw new Error(errorMessage);
    }
  }

  export function lanzarError(menssage:string){
  throw new Error(menssage)
  }


  // export function lanzarError(status:number){
  //   for (const s in ERROR) {
  //       if(status == parseInt(s)){
  //           const error: errorKey = parseInt(s) as errorKey;
  //           throw new Error(ERROR[error]);
  //       } 
  //   }
  // }

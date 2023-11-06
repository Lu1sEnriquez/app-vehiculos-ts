import ApartadosType from "@/models/ReporteGeneralType";

export function formatHoraAmPm(fecha:Date) {
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const amPm = horas >= 12 ? 'pm' : 'am';
    const horas12 = horas % 12 || 12; // Asegura que las 12:00 pm se muestren como 12:00 pm, no 0:00 pm
    return `${horas12}:${minutos.toString().padStart(2, '0')} ${amPm}`;
  }

  export function formatFecha(fecha:Date) {
    return`${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
  }


  export function compararFechas(a: ApartadosType, b: ApartadosType) {
    const fechaA = new Date(a.fechaSalida).getTime(); // Convierte la fecha a un valor numérico
    const fechaB = new Date(b.fechaSalida).getTime();
    return fechaA - fechaB; // Orden ascendente, para orden descendente, cambia el orden
  }
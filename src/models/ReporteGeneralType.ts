export default interface ApartadosType {
    idSolicitud: number;
    nombreSolicitante?: string;
    chofer?: string
    destino?: string;
    vehiculo?: string;
    placa?: string;
    fechaRegistro: string;
    fechaSalida: string;
    fechaLlegada: string;
    estadoSolicitud: string;
    estado: estadoType;
}


export  interface ReporteType {
    Folio?: number;
    Solicitante?: string;
    Chofer?: string
    Destino?: string;
    Vehiculo?: string;
    Placa?: string;
    FechaRegistro?: string;
    FechaSalida: string;
    HoraSalida: string;
    FechaLlegada: string;
    HoraLlegada: string;
    Estado: estadoType;
}


export type estadoType = "Pendiente"|"Circulacion"|"Finalizado";

export const estado ={
    Pendiente :"Pendiente",
    Circulacion:  "Circulacion" ,
    Finalizado: "Finalizado",
  }
export const solicitudes: ApartadosType[] = [
    {
        idSolicitud: 1,
        fechaSalida: '2023-01-15',
        fechaLlegada: '2023-01-20',
        vehiculo: 'Auto 1',
        placa: 'ABC123',
        nombreSolicitante: 'Juan Pérez',
        chofer: 'Carlos García',
        destino: 'Playa Tulum',
        estadoSolicitud: 'Finalizado',
        fechaRegistro: '2023-01-05',
        estado: "Finalizado"
    },
    {
        idSolicitud: 2,
        fechaSalida: '2022-06-10',
        fechaLlegada: '2022-06-15',
        vehiculo: 'Camioneta 2',
        placa: 'XYZ789',
        nombreSolicitante: 'Ana Sánchez',
        chofer: 'Miguel López',
        destino: 'Montañas de Yosemite',
        estadoSolicitud: 'Pendiente',
        fechaRegistro: '2022-06-01',
        estado: "Finalizado"
    },
    {
        idSolicitud: 3,
        fechaSalida: '2024-03-05',
        fechaLlegada: '2024-03-10',
        vehiculo: 'Autobús 3',
        placa: 'LMN456',
        nombreSolicitante: 'María González',
        chofer: 'Javier Rodríguez',
        destino: 'Ciudad de Nueva York',
        estadoSolicitud: 'Circulacion',
        fechaRegistro: '2024-03-01',
        estado: "Finalizado"
    },
    {
        idSolicitud: 4,
        fechaSalida: '2022-09-20',
        fechaLlegada: '2022-09-25',
        vehiculo: 'Auto 4',
        placa: 'PQR789',
        nombreSolicitante: 'Pedro Martínez',
        chofer: 'Luis Hernández',
        destino: 'Parque Nacional Yellowstone',
        estadoSolicitud: 'Finalizado',
        fechaRegistro: '2022-09-15',
        estado: "Pendiente"
    },
    {
        idSolicitud: 5,
        fechaSalida: '2023-12-01',
        fechaLlegada: '2023-12-05',
        vehiculo: 'Auto 5',
        placa: 'DEF456',
        nombreSolicitante: 'Laura Jiménez',
        chofer: 'Carlos Rodríguez',
        destino: 'Las Vegas',
        estadoSolicitud: 'Circulacion',
        fechaRegistro: '2023-11-25',
        estado: "Finalizado"
    },
    {
        idSolicitud: 6,
        fechaSalida: '2025-02-10',
        fechaLlegada: '2025-02-15',
        vehiculo: 'Camioneta 6',
        placa: 'JKL123',
        nombreSolicitante: 'Roberto García',
        chofer: 'Mariana López',
        destino: 'San Francisco',
        estadoSolicitud: 'Pendiente',
        fechaRegistro: '2025-02-05',
        estado: "Finalizado"
    },
    {
        idSolicitud: 7,
        fechaSalida: '2022-11-15',
        fechaLlegada: '2022-11-20',
        vehiculo: 'Autobús 7',
        placa: 'GHI789',
        nombreSolicitante: 'Carmen Fernández',
        chofer: 'Juan Rodríguez',
        destino: 'Orlando',
        estadoSolicitud: 'Circulacion',
        fechaRegistro: '2022-11-05',
        estado: "Finalizado"
    },
    {
        idSolicitud: 8,
        fechaSalida: '2024-07-05',
        fechaLlegada: '2024-07-10',
        vehiculo: 'Auto 8',
        placa: 'MNO456',
        nombreSolicitante: 'Ricardo Pérez',
        chofer: 'Sofía García',
        destino: 'Los Ángeles',
        estadoSolicitud: 'Pendiente',
        fechaRegistro: '2024-07-01',
        estado: "Pendiente"
    },
    {
        idSolicitud: 9,
        fechaSalida: '2023-05-25',
        fechaLlegada: '2023-05-30',
        vehiculo: 'Camioneta 9',
        placa: 'UVW123',
        nombreSolicitante: 'Isabel González',
        chofer: 'Alejandro Martínez',
        destino: 'París',
        estadoSolicitud: 'Circulacion',
        fechaRegistro: '2023-05-15',
        estado: "Finalizado"
    },
    {
        idSolicitud: 10,
        fechaSalida: '2026-08-10',
        fechaLlegada: '2026-08-15',
        vehiculo: 'Auto 10',
        placa: 'XYZ789',
        nombreSolicitante: 'Jorge Fernández',
        chofer: 'Luisa Sánchez',
        destino: 'Roma',
        estadoSolicitud: 'Pendiente',
        fechaRegistro: '2026-08-05',
        estado: "Circulacion"
    }
];
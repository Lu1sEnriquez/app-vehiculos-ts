export default interface SolicitudApartadoType {
    idSolicitud: number;
    fechaSalida: string;
    fechaLlegada: string;
    Vehiculo: string;
    nombreSolicitante: string;
    chofer: string
    destino: string;
    status: string;
}


export const solicitudes: SolicitudApartadoType[] = [
    {
        idSolicitud: 1,
        fechaSalida: '2023-01-15',
        fechaLlegada: '2023-01-20',
        Vehiculo: 'Auto 1',
        nombreSolicitante: 'Juan Pérez',
        chofer: 'Carlos García',
        destino: 'Playa Tulum',
        status: 'Aprobada'
    },
    {
        idSolicitud: 2,
        fechaSalida: '2022-06-10',
        fechaLlegada: '2022-06-15',
        Vehiculo: 'Camioneta 2',
        nombreSolicitante: 'Ana Sánchez',
        chofer: 'Miguel López',
        destino: 'Montañas de Yosemite',
        status: 'Rechazada'
    },
    {
        idSolicitud: 3,
        fechaSalida: '2024-03-05',
        fechaLlegada: '2024-03-10',
        Vehiculo: 'Autobús 3',
        nombreSolicitante: 'María González',
        chofer: 'Javier Rodríguez',
        destino: 'Ciudad de Nueva York',
        status: 'Pendiente'
    },
    {
        idSolicitud: 4,
        fechaSalida: '2022-09-20',
        fechaLlegada: '2022-09-25',
        Vehiculo: 'Auto 4',
        nombreSolicitante: 'Pedro Martínez',
        chofer: 'Luis Hernández',
        destino: 'Parque Nacional Yellowstone',
        status: 'Aprobada'
    },
    {
        idSolicitud: 5,
        fechaSalida: '2023-12-01',
        fechaLlegada: '2023-12-05',
        Vehiculo: 'Auto 5',
        nombreSolicitante: 'Laura Jiménez',
        chofer: 'Carlos Rodríguez',
        destino: 'Las Vegas',
        status: 'Pendiente'
    },
    {
        idSolicitud: 6,
        fechaSalida: '2025-02-10',
        fechaLlegada: '2025-02-15',
        Vehiculo: 'Camioneta 6',
        nombreSolicitante: 'Roberto García',
        chofer: 'Mariana López',
        destino: 'San Francisco',
        status: 'Rechazada'
    },
    {
        idSolicitud: 7,
        fechaSalida: '2022-11-15',
        fechaLlegada: '2022-11-20',
        Vehiculo: 'Autobús 7',
        nombreSolicitante: 'Carmen Fernández',
        chofer: 'Juan Rodríguez',
        destino: 'Orlando',
        status: 'Aprobada'
    },
    {
        idSolicitud: 8,
        fechaSalida: '2024-07-05',
        fechaLlegada: '2024-07-10',
        Vehiculo: 'Auto 8',
        nombreSolicitante: 'Ricardo Pérez',
        chofer: 'Sofía García',
        destino: 'Los Ángeles',
        status: 'Pendiente'
    },
    {
        idSolicitud: 9,
        fechaSalida: '2023-05-25',
        fechaLlegada: '2023-05-30',
        Vehiculo: 'Camioneta 9',
        nombreSolicitante: 'Isabel González',
        chofer: 'Alejandro Martínez',
        destino: 'París',
        status: 'Rechazada'
    },
    {
        idSolicitud: 10,
        fechaSalida: '2026-08-10',
        fechaLlegada: '2026-08-15',
        Vehiculo: 'Auto 10',
        nombreSolicitante: 'Jorge Fernández',
        chofer: 'Luisa Sánchez',
        destino: 'Roma',
        status: 'Pendiente'
    }
];

export interface User {
    id: number;
    nombre: string;
    apellido: string;
    cedula: string;
    fecha_nacimiento: string;
    email: string;
    contacto: string;
    rol: string;
}

export interface ApiResponse {
    user: User;
    token: string;
}
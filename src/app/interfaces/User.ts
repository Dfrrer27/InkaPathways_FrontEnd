export interface registerUser {
  nombre: string;
  apellido: string;
  correo: string;
  contraseña_hash: string;
  lugar_procedencia: string;
}

export interface loginUser {
  correo: string;
  contraseña_hash: string;
}

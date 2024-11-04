export interface registerUser {
  nombre: string;
  apellido: string;
  correo: string;
  contraseña_hash: string;
  region: string;
}

export interface loginUser {
  correo: string;
  contraseña_hash: string;
}

export interface regionsUser {
  name: string;
}

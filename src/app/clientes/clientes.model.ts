export interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  direccion: string;
  grupo: number;
}

export interface Grupo {
  id: number;
  nombre: string;
}
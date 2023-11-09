export interface Tarea {
  id: string;
  titulo: string;
  descripcion: string;
  estado: EstadoTarea;
}

export enum EstadoTarea {
  OPEN = 'OPEN',
  EN_PROGRESO = 'EN_PROGRESO',
  DONE = 'DONE',
}

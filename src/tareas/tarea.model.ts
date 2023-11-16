import { EstadoTarea } from './estado-tarea.enum';

export interface Tarea {
  id: string;
  titulo: string;
  descripcion: string;
  estado: EstadoTarea;
}

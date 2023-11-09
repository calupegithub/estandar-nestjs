import { EstadoTarea } from '../tarea.model';

export class ObtenerTareaFilterDto {
  estado: EstadoTarea;
  buscar: string;
}

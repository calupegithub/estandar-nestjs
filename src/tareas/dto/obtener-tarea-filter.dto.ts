import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { EstadoTarea } from '../estado-tarea.enum';

export class ObtenerTareaFilterDto {
  @IsOptional()
  @IsIn([EstadoTarea.OPEN, EstadoTarea.EN_PROGRESO, EstadoTarea.DONE])
  estado: EstadoTarea;

  @IsOptional()
  @IsNotEmpty()
  buscar: string;
}

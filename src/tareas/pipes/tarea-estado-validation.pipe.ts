import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { EstadoTarea } from '../tarea.model';

export class TareaEstadoValidationPipe implements PipeTransform {
  readonly estadosPermitidos = [
    EstadoTarea.OPEN,
    EstadoTarea.EN_PROGRESO,
    EstadoTarea.DONE,
  ];
  transform(value: any) {
    value = value.toUpperCase();
    if (!this.esPermitidoEstado(value))
      throw new BadRequestException(`${value} no es un estado permitido.`);
    return value;
  }
  private esPermitidoEstado(value): boolean {
    const idx = this.estadosPermitidos.indexOf(value);
    return idx !== -1;
  }
}

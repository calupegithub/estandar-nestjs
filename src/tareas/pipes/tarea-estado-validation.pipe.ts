import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { EstadoTarea } from '../estado-tarea.enum';

export class TareaEstadoValidationPipe implements PipeTransform {
  readonly estadosPermitidos = [
    EstadoTarea.OPEN,
    EstadoTarea.EN_PROGRESO,
    EstadoTarea.DONE,
  ];
  transform(value: any, metadata: ArgumentMetadata): unknown {
    value = value.toUpperCase();
    if (!this.esPermitidoEstado(value))
      throw new BadRequestException(`${value} es un estado invalido`);

    return value;
  }

  private esPermitidoEstado(estado: any): boolean {
    const idx = this.estadosPermitidos.indexOf(estado);

    return idx !== -1;
  }
}

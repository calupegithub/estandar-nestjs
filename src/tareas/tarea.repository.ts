import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { TareaEntity } from './tarea.entity';
import { CrearTareaDto } from './dto/crear-tarea-dto';
import { EstadoTarea } from './estado-tarea.enum';

@Injectable()
export class TareaRepository extends Repository<TareaEntity> {
  constructor(private dataSource: DataSource) {
    super(TareaEntity, dataSource.createEntityManager());
  }
  async crearTarea(crearTareaDto: CrearTareaDto): Promise<TareaEntity> {
    const { titulo, descripcion } = crearTareaDto;

    const tarea = new TareaEntity();
    tarea.titulo = titulo;
    tarea.descripcion = descripcion;
    tarea.estado = EstadoTarea.OPEN;

    await tarea.save();

    return tarea;
  }
}

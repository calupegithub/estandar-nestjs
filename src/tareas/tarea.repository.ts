import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { TareaEntity } from './tarea.entity';
import { CrearTareaDto } from './dto/crear-tarea-dto';
import { EstadoTarea } from './estado-tarea.enum';
import { ObtenerTareaFilterDto } from './dto/obtener-tarea-filter.dto';

@Injectable()
export class TareaRepository extends Repository<TareaEntity> {
  constructor(private dataSource: DataSource) {
    super(TareaEntity, dataSource.createEntityManager());
  }

  async getTareas(filterDto: ObtenerTareaFilterDto): Promise<TareaEntity[]> {
    const { estado, buscar } = filterDto;
    const query = this.createQueryBuilder('tarea');
    if (estado) {
      query.andWhere('tarea.estado = :estado', { estado });
    }
    if (buscar) {
      query.andWhere(
        '(tarea.titulo LIKE :buscar OR tarea.descripcion LIKE :buscar)',
        {
          buscar: `%${buscar}%`,
        },
      );
    }
    const tareas = await query.getMany();

    return tareas;
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
/*
@Injectable()
export class TareaRepository extends Repository<TareaEntity> {
  constructor(private dataSource: DataSource) {
    super(TareaEntity, dataSource.createEntityManager());
  }
  async findByName(
    firstName: string,
    lastName: string,
  ): Promise<TareaEntity[]> {
    return await this.createQueryBuilder('user')
      .where('user.firstName = :firstName', { firstName })
      .andWhere('user.lastName = :lastName', { lastName })
      .getMany();
  }
}
*/

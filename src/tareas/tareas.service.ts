import { Injectable, NotFoundException } from '@nestjs/common';

import { CrearTareaDto } from './dto/crear-tarea-dto';
import { ObtenerTareaFilterDto } from './dto/obtener-tarea-filter.dto';
import { TareaRepository } from './tarea.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TareaEntity } from './tarea.entity';

@Injectable()
export class TareasService {
  constructor(private taskRepsotiry: TareaRepository) {}

  async getTareaById(id: number): Promise<TareaEntity> {
    console.log('id', id);

    const tarea = this.taskRepsotiry.findOne({
      where: {
        id: id,
      },
    });

    if (!tarea) {
      throw new NotFoundException(`La tarea con ID ${id} no existe`);
    }

    return tarea;
  }
  //private tareas: Tarea[] = [];
  /* getAllTareas(): Tarea[] {
    return this.tareas;
  }

  crearTarea(crearTareaDto: CrearTareaDto): Tarea {
    const { titulo, descripcion } = crearTareaDto;

    const tarea: Tarea = {
      id: uuid(),
      titulo,
      descripcion,
      estado: EstadoTarea.OPEN,
    };
    this.tareas.push(tarea);
    return tarea;
  }

  getTareaById(id: string): Tarea {
    const encontrado = this.tareas.find((tarea) => tarea.id == id);

    if (!encontrado) {
      throw new NotFoundException(`La tarea con ID ${id} no existe`);
    }

    return encontrado;
  }

  deleteTarea(id: string): void {
    const encontrado = this.getTareaById(id);
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
  }

  updateTareaStatus(id: string, status: EstadoTarea): Tarea {
    const tarea = this.getTareaById(id);
    tarea.estado = status;
    return tarea;
  }

  getTaskWithFilter(filterDto: ObtenerTareaFilterDto): Tarea[] {
    const { estado, buscar } = filterDto;

    let tareas = this.getAllTareas();

    if (estado) {
      tareas = tareas.filter((tarea) => tarea.estado == estado);
    }

    if (buscar) {
      tareas = tareas.filter(
        (tarea) =>
          tarea.titulo.includes(buscar) || tarea.descripcion.includes(buscar),
      );
    }

    return tareas;
  } */
}

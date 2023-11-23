import { Injectable, NotFoundException } from '@nestjs/common';
import { CrearTareaDto } from './dto/crear-tarea-dto';
import { ObtenerTareaFilterDto } from './dto/obtener-tarea-filter.dto';
import { TareaRepository } from './tarea.repository';
import { TareaEntity } from './tarea.entity';
import { EstadoTarea } from './estado-tarea.enum';

@Injectable()
export class TareasService {
  constructor(private taskRepsotiry: TareaRepository) {}

  async getTareaById(id: number): Promise<TareaEntity> {
    const tarea = await this.taskRepsotiry.findOne({
      where: {
        id: id,
      },
    });

    if (!tarea) {
      throw new NotFoundException(`La tarea con ID ${id} no existe`);
    }

    return tarea;
  }
  async crearTarea(crearTareaDto: CrearTareaDto): Promise<TareaEntity> {
    return this.taskRepsotiry.crearTarea(crearTareaDto);
  }

  async deleteTarea(id: number): Promise<void> {
    const resultado = await this.taskRepsotiry.delete(id);
    if (resultado.affected == 0) {
      throw new NotFoundException(`La tarea con ID ${id} no existe`);
    }
  }

  async updateTareaStatus(
    id: number,
    status: EstadoTarea,
  ): Promise<TareaEntity> {
    const tarea = await this.getTareaById(id);
    tarea.estado = status;
    await tarea.save();
    return tarea;
  }

  async getTareas(filterDto: ObtenerTareaFilterDto): Promise<TareaEntity[]> {
    return this.taskRepsotiry.getTareas(filterDto);
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

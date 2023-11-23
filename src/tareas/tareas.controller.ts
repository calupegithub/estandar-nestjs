import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TareasService } from './tareas.service';
import { TareaEntity } from './tarea.entity';
import { CrearTareaDto } from './dto/crear-tarea-dto';
import { ObtenerTareaFilterDto } from './dto/obtener-tarea-filter.dto';
import { TareaEstadoValidationPipe } from './pipes/tarea-estado-validation.pipe';
import { EstadoTarea } from './estado-tarea.enum';

@Controller('tareas')
export class TareasController {
  constructor(private tareaService: TareasService) {}

  @Get('/:id')
  getTareaById(@Param('id', ParseIntPipe) id: number): Promise<TareaEntity> {
    return this.tareaService.getTareaById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  crearTarea(@Body() crearTareaDto: CrearTareaDto): Promise<TareaEntity> {
    return this.tareaService.crearTarea(crearTareaDto);
  }

  @Delete('/:id')
  deleteTarea(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.tareaService.deleteTarea(id);
  }

  @Patch('/:id/status')
  updateTareaStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('estado', TareaEstadoValidationPipe) status: EstadoTarea,
  ): Promise<number> {
    return this.tareaService.updateTareaStatus(id, status);
  }
  /* @Get()
  getTareas(@Query(ValidationPipe) filterDto: ObtenerTareaFilterDto): Tarea[] {
    console.log(filterDto);

    if (Object.keys(filterDto).length) {
      return this.tareaService.getTaskWithFilter(filterDto);
    } else {
      return this.tareaService.getAllTareas();
    }
  }

  @Get('/:id')
  getTareaById(@Param('id') id: string): Tarea {
    return this.tareaService.getTareaById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  crearTarea(@Body() crearTareaDto: CrearTareaDto): Tarea {
    return this.tareaService.crearTarea(crearTareaDto);
  }

  @Delete('/:id')
  deleteTarea(@Param('id') id: string): void {
    this.tareaService.deleteTarea(id);
  }

  @Patch('/:id/status')
  updateTareaStatus(
    @Param('id') id: string,
    @Body('estado', TareaEstadoValidationPipe) status: EstadoTarea,
  ): Tarea {
    return this.tareaService.updateTareaStatus(id, status);
  } */
}

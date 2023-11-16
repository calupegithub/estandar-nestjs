import { Module } from '@nestjs/common';
import { TareasController } from './tareas.controller';
import { TareasService } from './tareas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareaRepository } from './tarea.repository';
import { TareaEntity } from './tarea.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TareaEntity])],
  controllers: [TareasController],
  providers: [TareasService, TareaRepository],
})
export class TareasModule {}

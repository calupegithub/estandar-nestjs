import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { EstadoTarea } from './estado-tarea.enum';

export class Tarea extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  titulo: string;
  @Column()
  descripcion: string;
  @Column()
  estado: EstadoTarea;
}

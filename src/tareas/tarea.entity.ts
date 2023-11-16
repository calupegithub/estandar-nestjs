import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EstadoTarea } from './estado-tarea.enum';

@Entity()
export class TareaEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  titulo: string;
  @Column()
  descripcion: string;
  @Column()
  estado: EstadoTarea;
}

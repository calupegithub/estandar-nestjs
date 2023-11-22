import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id;
  @Column()
  nombre: string;
  @Column()
  descripcion: string;
  @Column()
  precio: number;
}

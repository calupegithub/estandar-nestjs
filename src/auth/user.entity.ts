import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Usuarios')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  usuario: string;
  @Column()
  clave: string;
  @Column()
  salt: string;

  /*  public async hashClave(clave: string, salt: string): Promise<string> {
    return bcrypt.hash(clave, salt);
  } */
}

import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CrearTareaDto {
  @IsNotEmpty()
  titulo: string;
  @IsNotEmpty()
  descripcion: string;
  @IsNumberString()
  edad: number;
}

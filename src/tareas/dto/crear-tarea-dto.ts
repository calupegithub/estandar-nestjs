import { IsNotEmpty, IsNumber } from 'class-validator';

export class CrearTareaDto {
  @IsNotEmpty()
  titulo: string;
  @IsNotEmpty()
  descripcion: string;
  @IsNumber()
  edad: number;
}

import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCrdentialDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  usuario: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(
    /((?=.*\d)|(?=.*\W+))(?=(.*[!@#$%^&*()_+=.])+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    {
      message: 'Password muy debil.',
    },
  )
  clave: string;
}

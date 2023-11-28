import { DataSource, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthCrdentialDto } from './dto/auth-credential.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async signUp(credentialDto: AuthCrdentialDto): Promise<void> {
    const { usuario, clave } = credentialDto;

    const user = new User();
    user.usuario = usuario;
    user.salt = await bcrypt.genSalt();
    //user.clave = await user.hashClave(clave, user.salt);
    user.clave = await this.hashClave(clave, user.salt);
    try {
      await user.save();
    } catch (error) {
      if (error.code == '23505') {
        // code para usuario duplicado
        throw new ConflictException('Usuario ya existe');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  private async hashClave(clave: string, salt: string): Promise<string> {
    return bcrypt.hash(clave, salt);
  }
}

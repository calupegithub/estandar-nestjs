import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
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
    user.clave = clave;
    await user.save();
  }
}

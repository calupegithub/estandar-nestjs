import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialDto } from './dto/auth-credencial.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async singUp(credentialDto: AuthCredentialDto): Promise<void> {
    const { usuario, clave } = credentialDto;

    const user = new User();
    user.usuario = usuario;
    user.clave = clave;
    await user.save();
  }
}

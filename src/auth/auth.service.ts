import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { AuthCredentialDto } from './dto/auth-credencial.dto';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async signUp(credentialDto: AuthCredentialDto): Promise<void> {
    return this.userRepository.singUp(credentialDto);
  }
}

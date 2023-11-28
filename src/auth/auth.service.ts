import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repositoy';
import { AuthCrdentialDto } from './dto/auth-credential.dto';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async signUp(credentialDto: AuthCrdentialDto): Promise<void> {
    return this.userRepository.signUp(credentialDto);
  }
}

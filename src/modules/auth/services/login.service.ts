import { Injectable, UnauthorizedException } from '@nestjs/common';
import { FindOneUserRepository } from '../repositories';
import { LoginDto } from '../dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(private readonly findOneUserRepository: FindOneUserRepository) {}

  async handle(dto: LoginDto) {
    const user = await this.findOneUserRepository.handle({
      where: { email: dto.email },
    });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }
}

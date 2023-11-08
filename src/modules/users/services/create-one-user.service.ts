import { ConflictException, Injectable } from '@nestjs/common';
import {
  CreateOneUserRepository,
  FindOneUserRepository,
} from '../repositories';
import { CreateOneUserDto } from '../dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateOneUserService {
  constructor(
    private readonly createOneUserRepository: CreateOneUserRepository,
    private readonly findOneUserRepository: FindOneUserRepository,
  ) {}

  async handle(dto: CreateOneUserDto) {
    const user = await this.findOneUserRepository.handle({
      where: { email: dto.email },
    });

    if (user) throw new ConflictException(`Email ${dto.email} already exists`);

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    return await this.createOneUserRepository.handle({
      data: {
        name: dto.name,
        email: dto.email,
        password: hashedPassword,
      },
    });
  }
}

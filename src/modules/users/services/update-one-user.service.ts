import { Injectable, NotFoundException } from '@nestjs/common';
import {
  UpdateOneUserRepository,
  FindOneUserRepository,
} from '../repositories';
import { UpdateOneUserDto, UpdateOneUserParams } from '../dto';

@Injectable()
export class UpdateOneUserService {
  constructor(
    private readonly updateOneUserRepository: UpdateOneUserRepository,
    private readonly findOneUserRepository: FindOneUserRepository,
  ) {}

  async handle(params: UpdateOneUserParams, dto: UpdateOneUserDto) {
    const user = await this.findOneUserRepository.handle({
      where: { id: params.id },
    });

    if (!user) throw new NotFoundException(`User ${params.id} not found`);

    const updatedUser = await this.updateOneUserRepository.handle({
      where: { id: params.id },
      data: {
        name: dto.name,
        email: dto.email,
        password: dto.password,
      },
    });

    delete updatedUser.password;

    return updatedUser;
  }
}

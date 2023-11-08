import { Injectable, NotFoundException } from '@nestjs/common';
import { FindOneUserRepository } from '../repositories';

@Injectable()
export class FindOneUserService {
  constructor(private readonly findOneUserRepository: FindOneUserRepository) {}

  async handle(id: string) {
    const user = await this.findOneUserRepository.handle({
      where: { id },
    });

    if (!user) throw new NotFoundException(`User ${id} not found`);

    return user;
  }
}

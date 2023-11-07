import { Injectable } from '@nestjs/common';
import { FindOneUserRepository } from '../repositories';

@Injectable()
export class FindOneUserService {
  constructor(private readonly findOneUserRepository: FindOneUserRepository) {}

  async handle(id: string) {
    return await this.findOneUserRepository.handle({
      where: { id },
    });
  }
}

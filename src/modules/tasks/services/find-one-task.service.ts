import { Injectable, NotFoundException } from '@nestjs/common';
import { FindOneTaskRepository } from '../repositories';

@Injectable()
export class FindOneTaskService {
  constructor(private readonly findOneTaskRepository: FindOneTaskRepository) {}

  async handle(id: string) {
    const task = await this.findOneTaskRepository.handle({
      where: { id },
    });

    if (!task) throw new NotFoundException(`Task ${id} not found`);

    return task;
  }
}

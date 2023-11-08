import { Injectable } from '@nestjs/common';
import { FindManyTasksRepository } from '../repositories/find-many-tasks.repository';

@Injectable()
export class FindManyTasksService {
  constructor(
    private readonly findManyTasksRepository: FindManyTasksRepository,
  ) {}

  async handle() {
    return await this.findManyTasksRepository.handle({});
  }
}

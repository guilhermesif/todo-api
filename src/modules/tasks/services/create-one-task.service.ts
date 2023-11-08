import { Injectable } from '@nestjs/common';
import { CreateOneTaskRepository } from '../repositories';
import { CreateOneTaskDto } from '../dto';

@Injectable()
export class CreateOneTaskService {
  constructor(
    private readonly createOneTaskRepository: CreateOneTaskRepository,
  ) {}

  async handle(dto: CreateOneTaskDto) {
    return await this.createOneTaskRepository.handle({
      data: {
        title: dto.title,
        done: dto.done,
        user: {
          connect: { id: dto.userId },
        },
      },
    });
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import {
  UpdateOneTaskRepository,
  FindOneTaskRepository,
} from '../repositories';
import { UpdateOneTaskDto, UpdateOneTaskParams } from '../dto';

@Injectable()
export class UpdateOneTaskService {
  constructor(
    private readonly updateOneTaskRepository: UpdateOneTaskRepository,
    private readonly findOneTaskRepository: FindOneTaskRepository,
  ) {}

  async handle(params: UpdateOneTaskParams, dto: UpdateOneTaskDto) {
    const task = await this.findOneTaskRepository.handle({
      where: { id: params.id },
    });

    if (!task) throw new NotFoundException(`Task ${params.id} not found`);

    return await this.updateOneTaskRepository.handle({
      where: { id: params.id },
      data: {
        title: dto.title,
        done: dto.done,
      },
    });
  }
}

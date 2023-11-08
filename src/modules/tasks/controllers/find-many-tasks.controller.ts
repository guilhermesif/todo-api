import { Controller, Get } from '@nestjs/common';
import { FindManyTasksService } from '../services';

@Controller('tasks')
export class FindManyTasksController {
  constructor(private readonly findManyTasksService: FindManyTasksService) {}

  @Get()
  async handle() {
    return await this.findManyTasksService.handle();
  }
}

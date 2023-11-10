import { Controller, Get } from '@nestjs/common';
import { FindManyTasksService } from '../services';
import { User } from '../../../decorators';

@Controller('tasks')
export class FindManyTasksController {
  constructor(private readonly findManyTasksService: FindManyTasksService) {}

  @Get()
  async handle(@User() user: Express.Request['user']) {
    return await this.findManyTasksService.handle(user);
  }
}

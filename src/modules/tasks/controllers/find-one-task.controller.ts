import { Controller, Get, Param } from '@nestjs/common';
import { FindOneTaskService } from '../services';

@Controller('tasks')
export class FindOneTaskController {
  constructor(private readonly findOneTaskService: FindOneTaskService) {}

  @Get(':id')
  async handle(@Param('id') id: string) {
    return await this.findOneTaskService.handle(id);
  }
}

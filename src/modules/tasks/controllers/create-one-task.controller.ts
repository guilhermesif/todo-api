import { Body, Controller, Post } from '@nestjs/common';
import { CreateOneTaskService } from '../services';
import { CreateOneTaskDto } from '../dto';

@Controller('tasks')
export class CreateOneTaskController {
  constructor(private readonly createOneTaskService: CreateOneTaskService) {}

  @Post()
  async handle(@Body() dto: CreateOneTaskDto) {
    return await this.createOneTaskService.handle(dto);
  }
}

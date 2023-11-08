import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateOneTaskService } from '../services';
import { UpdateOneTaskDto, UpdateOneTaskParams } from '../dto';

@Controller('tasks')
export class UpdateOneTaskController {
  constructor(private readonly createOneTaskService: UpdateOneTaskService) {}

  @Patch(':id')
  async handle(
    @Param() params: UpdateOneTaskParams,
    @Body() dto: UpdateOneTaskDto,
  ) {
    return await this.createOneTaskService.handle(params, dto);
  }
}

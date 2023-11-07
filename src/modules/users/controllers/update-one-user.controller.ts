import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateOneUserService } from '../services';
import { UpdateOneUserDto, UpdateOneUserParams } from '../dto';

@Controller('users')
export class UpdateOneUserController {
  constructor(private readonly createOneUserService: UpdateOneUserService) {}

  @Patch(':id')
  async handle(
    @Param() params: UpdateOneUserParams,
    @Body() dto: UpdateOneUserDto,
  ) {
    return await this.createOneUserService.handle(params, dto);
  }
}

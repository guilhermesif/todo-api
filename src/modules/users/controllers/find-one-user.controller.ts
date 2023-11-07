import { Controller, Get, Param } from '@nestjs/common';
import { FindOneUserService } from '../services';

@Controller('users')
export class FindOneUserController {
  constructor(private readonly findOneUserService: FindOneUserService) {}

  @Get(':id')
  async handle(@Param('id') id: string) {
    return await this.findOneUserService.handle(id);
  }
}

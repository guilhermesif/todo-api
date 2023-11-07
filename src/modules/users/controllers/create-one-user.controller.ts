import { Body, Controller, Post } from '@nestjs/common';
import { CreateOneUserService } from '../services';
import { CreateOneUserDto } from '../dto';

@Controller('users')
export class CreateOneUserController {
  constructor(private readonly createOneUserService: CreateOneUserService) {}

  @Post()
  async handle(@Body() dto: CreateOneUserDto) {
    return await this.createOneUserService.handle(dto);
  }
}

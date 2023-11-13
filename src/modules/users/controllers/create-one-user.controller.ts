import { Body, Controller, Post } from '@nestjs/common';
import { CreateOneUserService } from '../services';
import { CreateOneUserDto } from '../dto';
import { Public } from '../../../decorators';

@Controller('users')
export class CreateOneUserController {
  constructor(private readonly createOneUserService: CreateOneUserService) {}

  @Public()
  @Post()
  async handle(@Body() dto: CreateOneUserDto) {
    return await this.createOneUserService.handle(dto);
  }
}

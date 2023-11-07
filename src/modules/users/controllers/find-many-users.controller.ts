import { Controller, Get } from '@nestjs/common';
import { FindManyUsersService } from '../services';

@Controller('users')
export class FindManyUsersController {
  constructor(private readonly findManyUsersService: FindManyUsersService) {}

  @Get()
  async handle() {
    return await this.findManyUsersService.handle();
  }
}

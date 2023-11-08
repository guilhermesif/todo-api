import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from '../services';
import { LoginDto } from '../dto';

@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  async handle(@Body() dto: LoginDto) {
    return await this.loginService.handle(dto);
  }
}

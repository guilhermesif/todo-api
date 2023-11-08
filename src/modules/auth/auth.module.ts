import { Module } from '@nestjs/common';
import { LoginController } from './controllers';
import { FindOneUserRepository } from './repositories';
import { LoginService } from './services';

@Module({
  controllers: [LoginController],
  providers: [LoginService, FindOneUserRepository],
})
export class AuthModule {}

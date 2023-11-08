import { Module } from '@nestjs/common';
import { LoginController } from './controllers';
import { FindOneUserRepository } from './repositories';
import { LoginService } from './services';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService, FindOneUserRepository],
})
export class AuthModule {}

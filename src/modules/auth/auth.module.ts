import { Module } from '@nestjs/common';
import { LoginController } from './controllers';
import { FindOneUserRepository } from './repositories';
import { LoginService } from './services';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from './guards';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: 300 },
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService, FindOneUserRepository, JwtGuard],
  exports: [JwtModule],
})
export class AuthModule {}

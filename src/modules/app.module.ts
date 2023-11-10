import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/guards';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule, TasksModule],
  providers: [{ provide: APP_GUARD, useClass: JwtGuard }],
})
export class AppModule {}

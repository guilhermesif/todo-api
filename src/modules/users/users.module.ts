import { Module } from '@nestjs/common';
import {
  CreateOneUserController,
  FindManyUsersController,
  FindOneUserController,
  UpdateOneUserController,
} from './controllers';
import {
  CreateOneUserRepository,
  FindManyUsersRepository,
  FindOneUserRepository,
  UpdateOneUserRepository,
} from './repositories';
import {
  CreateOneUserService,
  FindManyUsersService,
  FindOneUserService,
  UpdateOneUserService,
} from './services';

@Module({
  controllers: [
    FindOneUserController,
    FindManyUsersController,
    CreateOneUserController,
    UpdateOneUserController,
  ],
  providers: [
    FindOneUserService,
    FindOneUserRepository,
    FindManyUsersRepository,
    FindManyUsersService,
    CreateOneUserService,
    CreateOneUserRepository,
    UpdateOneUserRepository,
    UpdateOneUserService,
  ],
})
export class UsersModule {}

import { Injectable } from '@nestjs/common';
import { FindManyUsersRepository } from '../repositories/find-many-users.repository';

@Injectable()
export class FindManyUsersService {
  constructor(
    private readonly findManyUsersRepository: FindManyUsersRepository,
  ) {}

  async handle() {
    const users = await this.findManyUsersRepository.handle({});

    return users.map((user) => {
      delete user.password;
      return user;
    });
  }
}

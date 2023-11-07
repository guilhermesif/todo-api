import { Injectable } from '@nestjs/common';
import { FindManyUsersRepository } from '../repositories/find-many-users.repository';

@Injectable()
export class FindManyUsersService {
  constructor(
    private readonly findManyUsersRepository: FindManyUsersRepository,
  ) {}

  async handle() {
    return await this.findManyUsersRepository.handle({});
  }
}

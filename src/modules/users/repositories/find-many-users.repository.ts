import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/services';
import { Prisma } from '@prisma/client';

@Injectable()
export class FindManyUsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async handle(args?: Prisma.UserFindManyArgs) {
    return this.prisma.user.findMany(args);
  }
}

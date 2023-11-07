import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/services';
import { Prisma } from '@prisma/client';

@Injectable()
export class FindOneUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async handle(args: Prisma.UserFindUniqueArgs) {
    return this.prisma.user.findUnique(args);
  }
}

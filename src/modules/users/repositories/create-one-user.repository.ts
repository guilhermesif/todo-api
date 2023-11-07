import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/services';
import { Prisma } from '@prisma/client';

@Injectable()
export class CreateOneUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async handle(args: Prisma.UserCreateArgs) {
    return this.prisma.user.create(args);
  }
}

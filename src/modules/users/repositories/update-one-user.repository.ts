import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/services';
import { Prisma } from '@prisma/client';

@Injectable()
export class UpdateOneUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async handle(args: Prisma.UserUpdateArgs) {
    return this.prisma.user.update(args);
  }
}

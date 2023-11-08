import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/services';
import { Prisma } from '@prisma/client';

@Injectable()
export class CreateOneTaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async handle(args: Prisma.TaskCreateArgs) {
    return this.prisma.task.create(args);
  }
}

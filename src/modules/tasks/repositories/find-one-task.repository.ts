import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/services';
import { Prisma } from '@prisma/client';

@Injectable()
export class FindOneTaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async handle(args: Prisma.TaskFindUniqueArgs) {
    return this.prisma.task.findUnique(args);
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/services';
import { Prisma } from '@prisma/client';

@Injectable()
export class FindManyTasksRepository {
  constructor(private readonly prisma: PrismaService) {}

  async handle(args?: Prisma.TaskFindManyArgs) {
    return this.prisma.task.findMany(args);
  }
}

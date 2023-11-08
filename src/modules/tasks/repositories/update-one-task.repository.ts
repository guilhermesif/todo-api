import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/services';
import { Prisma } from '@prisma/client';

@Injectable()
export class UpdateOneTaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async handle(args: Prisma.TaskUpdateArgs) {
    return this.prisma.task.update(args);
  }
}

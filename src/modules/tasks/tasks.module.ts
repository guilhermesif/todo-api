import { Module } from '@nestjs/common';
import {
  CreateOneTaskController,
  FindManyTasksController,
  FindOneTaskController,
  UpdateOneTaskController,
} from './controllers';
import {
  CreateOneTaskRepository,
  FindManyTasksRepository,
  FindOneTaskRepository,
  UpdateOneTaskRepository,
} from './repositories';
import {
  CreateOneTaskService,
  FindManyTasksService,
  FindOneTaskService,
  UpdateOneTaskService,
} from './services';

@Module({
  controllers: [
    FindOneTaskController,
    FindManyTasksController,
    CreateOneTaskController,
    UpdateOneTaskController,
  ],
  providers: [
    FindOneTaskService,
    FindOneTaskRepository,
    FindManyTasksRepository,
    FindManyTasksService,
    CreateOneTaskService,
    CreateOneTaskRepository,
    UpdateOneTaskRepository,
    UpdateOneTaskService,
  ],
})
export class TasksModule {}

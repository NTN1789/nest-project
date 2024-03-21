import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema, TaskSchemaFactory } from './schemas/task.schema';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TaskSchema.name, schema: TaskSchemaFactory }, // esta injetando para o task.service  na parte de schema
    ]),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
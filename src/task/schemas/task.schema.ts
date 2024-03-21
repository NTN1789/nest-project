import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Task } from '../entities/task.entity';

export type TaskDocument = HydratedDocument<TaskSchema>;  // tipos de dados  e vai tipar e buscar no banco

@Schema({ collection: 'tasks', timestamps: true })
export class TaskSchema implements Task {
  @Prop()
  id: string;

  @Prop()
  name: string;
}

export const TaskSchemaFactory = SchemaFactory.createForClass(TaskSchema);  // esta criando a collection na memoria e no banco de dados

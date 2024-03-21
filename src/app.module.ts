import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.moudle';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TaskModule ,
    UsersModule,
     MongooseModule.forRoot('mongodb://localhost:27017/nest'),
   //  AuthModule
    
    ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useValue: AuthGuard, 
    },
    
  
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.moudle';
import { AuthModule } from './auth/auth.module';
import { AppCacheModule } from './cache/cache.module';

@Module({
  imports: [
    TaskModule ,
    UsersModule,
     MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    AuthModule,
    AppCacheModule
    
    ],
  controllers: [AppController],
  providers: [
    AppService,
   {
      provide: APP_GUARD,     // config do middleware do jwt   , ta no provider para toda aplicação  
      useClass: AuthGuard,  //todas as rotas estão protegidar por conta do jwt , por isso coloquei o public na rota
    },
   
  
  ],
})
export class AppModule {}

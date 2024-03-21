import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppCacheModule } from 'src/cache/cache.module';
import { UsersModule } from '../users/users.moudle';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants/constants';

@Module({
  imports: [
    AppCacheModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,      // a secret está na pasta constants
      signOptions: { expiresIn: '360000000s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
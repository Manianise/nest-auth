import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_TOKEN } from 'src/configs/jwt-secrets';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: JWT_TOKEN,
      signOptions: {expiresIn: '1d'}
    })
  ]
})
export class AuthModule {}
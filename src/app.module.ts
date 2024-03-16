import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [UsersModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
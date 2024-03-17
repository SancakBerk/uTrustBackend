import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { AddUserModule } from './adduser/adduser.module';
@Module({
  imports: [UsersModule, LoginModule, AddUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

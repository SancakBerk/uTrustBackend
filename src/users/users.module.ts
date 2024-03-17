import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AdduserService } from 'src/adduser/adduser.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [AdduserService],
})
export class UsersModule {}

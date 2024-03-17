import { Module } from '@nestjs/common';
import { AddUsersController } from './adduser.controller';
import { AdduserService } from './adduser.service';

@Module({
  imports: [],
  controllers: [AddUsersController],
  providers: [AdduserService],
})
export class AddUserModule {}

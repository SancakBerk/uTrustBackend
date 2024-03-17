// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Controller, Post, Body } from '@nestjs/common';
import { LoginDataType } from './logindata.dto';

@Controller('login')
export class LoginController {
  @Post()
  create(@Body() data: LoginDataType) {
    return {
      success: true,
      message: `Successfull login Username ${data.Username} Password ${data.Password}`,
    };
  }
}

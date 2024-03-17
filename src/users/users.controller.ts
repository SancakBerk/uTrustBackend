import { AdduserService } from 'src/adduser/adduser.service';
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly adduserService: AdduserService) {}
  @Get()
  getAll(): { OrderID: number; CustomerID: string; Price: number }[] {
    return this.adduserService.getListe();
  }
}

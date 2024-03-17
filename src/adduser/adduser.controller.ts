import { Body, Controller, Post } from '@nestjs/common';
import { Adduserdatatype } from './adduser.dto';
import { AdduserService } from './adduser.service';

@Controller('adduser')
export class AddUsersController {
  constructor(private readonly adduserService: AdduserService) {}
  @Post() // Define the route path in the @Post decorator
  Adddata(
    @Body() addeddata: Adduserdatatype,
  ): { OrderID: number; CustomerID: string; Price: number }[] {
    return this.adduserService.addListandReturn(
      addeddata.OrderID,
      addeddata.CustomerID,
      addeddata.Price,
    );
  }
}

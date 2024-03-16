import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAll(): { OrderID: number; CustomerID: string; Freight: number }[] {
    return [
      { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38 },
      { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61 },
      { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83 },
      { OrderID: 10248, CustomerID: 'DENEME', Freight: 32.38 },
      { OrderID: 10248, CustomerID: 'DENEME2', Freight: 38.38 },
      { OrderID: 10248, CustomerID: 'DENEME3', Freight: 344.48 },
      { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38 },
      { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61 },
      { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83 },
      { OrderID: 10248, CustomerID: 'DENEME', Freight: 32.38 },
      { OrderID: 10248, CustomerID: 'DENEME2', Freight: 38.38 },
      { OrderID: 10248, CustomerID: 'DENEME3', Freight: 344.48 },
      { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38 },
      { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61 },
      { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83 },
      { OrderID: 10248, CustomerID: 'DENEME', Freight: 32.38 },
      { OrderID: 10248, CustomerID: 'DENEME2', Freight: 38.38 },
      { OrderID: 10248, CustomerID: 'DENEME3', Freight: 344.48 },
    ];
  }
}

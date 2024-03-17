import { Injectable } from '@nestjs/common';
import { Adduserdatatype } from 'src/adduser/adduser.dto';

@Injectable()
export class UserService {
  Add(): Adduserdatatype[] {
    return [
      { OrderID: 10248, CustomerID: 'VINET', Price: 32.38 },
      { OrderID: 10249, CustomerID: 'TOMSP', Price: 11.61 },
      { OrderID: 10250, CustomerID: 'HANAR', Price: 65.83 },
      { OrderID: 10248, CustomerID: 'DENEME', Price: 32.38 },
      { OrderID: 10248, CustomerID: 'DENEME2', Price: 38.38 },
      { OrderID: 10248, CustomerID: 'DENEME3', Price: 344.48 },
      { OrderID: 10248, CustomerID: 'VINET', Price: 32.38 },
      { OrderID: 10249, CustomerID: 'TOMSP', Price: 11.61 },
      { OrderID: 10250, CustomerID: 'HANAR', Price: 65.83 },
      { OrderID: 10248, CustomerID: 'DENEME', Price: 32.38 },
      { OrderID: 10248, CustomerID: 'DENEME2', Price: 38.38 },
      { OrderID: 10248, CustomerID: 'DENEME3', Price: 344.48 },
      { OrderID: 10248, CustomerID: 'VINET', Price: 32.38 },
      { OrderID: 10249, CustomerID: 'TOMSP', Price: 11.61 },
      { OrderID: 10250, CustomerID: 'HANAR', Price: 65.83 },
      { OrderID: 10248, CustomerID: 'DENEME', Price: 32.38 },
      { OrderID: 10248, CustomerID: 'DENEME2', Price: 38.38 },
      { OrderID: 10248, CustomerID: 'DENEME3', Price: 344.48 },
    ];
  }
}

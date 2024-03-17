// liste-servisi.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class AdduserService {
  private liste: { OrderID: number; CustomerID: string; Price: number }[] = [
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
    { OrderID: 10248, CustomerID: 'DENEME2', Price: 38.38 },
    // Example data
  ];
  private cache: { OrderID: number; CustomerID: string; Price: number }[] =
    this.liste;
  getListe() {
    return this.cache;
  }
  addListandReturn(OrderID: number, CustomerID: string, Price: number) {
    this.liste.push({
      OrderID: OrderID,
      CustomerID: CustomerID,
      Price: Price,
    });
    this.cache = this.liste;
    return this.liste;
  }
}

import { Component, OnInit } from '@angular/core';
import { toNumber } from '../util';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  stock = {
    cost: { price: undefined, handlingFee: 0.1425, number: 1 },
    sell: { price: undefined, handlingFee: 0.1425, tax: 0.3, number: 1 },
  } as any;

  constructor() { }

  ngOnInit(): void {
  }

  calStockCost() {
    return toNumber(this.stock.cost.price) * 1000
      * (1 + toNumber(this.stock.cost.handlingFee) * 0.01)
      * toNumber(this.stock.cost.number);
  }

  calStockSell() {
    return toNumber(this.stock.sell.price) * 1000
      * (1 - toNumber(this.stock.sell.handlingFee) * 0.01 - toNumber(this.stock.sell.tax) * 0.01)
      * toNumber(this.stock.sell.number);
  }
}

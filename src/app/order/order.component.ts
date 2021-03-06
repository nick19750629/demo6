import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input()
  stockCode: String;

  @Input()
  amount: number;

  constructor() {
    setInterval( () => {
      this.stockCode = "Apple";
    }, 3000
    );
  }

  ngOnInit() {
  }

}

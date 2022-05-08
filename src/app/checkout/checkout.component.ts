import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  clickeado:any;
  constructor() { }

  ngOnInit(): void {
  }
  click(data:any)
  {
    this.clickeado = data;
  }

}

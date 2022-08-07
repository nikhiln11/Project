import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {ProductType} from "src/types";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() data!:ProductType;
  @Input() convert!:string;
  flag: string="demo";
  @Output() btnclick=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
 notifyParent()
 {
   this.btnclick.emit(
     {
       id:this.data.productId,
      name:this.data.productName,
 });
}
}

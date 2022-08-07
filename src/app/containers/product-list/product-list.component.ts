import { Component, OnInit,Input, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/types';
import { CurrencyService } from 'src/app/services/currency.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService,],
})
export class ProductListComponent implements OnInit {
   convertcode!: string;
 // @Input() concode="INR";
  hasError:boolean=false;
  data1: ProductType[] = [];
  /**constructor() {}

  ngOnInit(): void {}**/
  cartadder(data: any) {
    this.router.navigate(['/cart']);
    console.log('Item Id ', data.id, 'with name ', data.name, 'Added to cart');
  }
  constructor(private productService: ProductService,private router: Router,private currencyService: CurrencyService) {}
  ngOnInit(): void {
    this.getData();
    this.getCurrency();
  }


  getCurrency(){
    console.log("Am I running? ");
    this.currencyService.currencyObservable.subscribe(
      (data) => {
        console.log("data is", data);
        this.convertcode = data;
      }
    );
  }

  getData() {
   // this.data1=this.productService.getProducts();
    this.productService.getProducts().subscribe(
      (data) => {
        console.log('SUCCESS', data);
        this.data1 = data;
      },
      (error) => {
        console.log('ERROR', error);
        this.hasError=true;
      }
    );
  }
  func()
  {
    console.log(this.convertcode);
  }

}

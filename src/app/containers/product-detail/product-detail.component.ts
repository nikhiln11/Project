import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParamMap.subscribe((params) => {
      console.log('RATING', params.get('rating'));
      console.log('SIZE', params.get('size'));
    });
   }


  ngOnInit(): void {
  }

}

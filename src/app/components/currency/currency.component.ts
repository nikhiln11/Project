import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  @Output() selected=new EventEmitter();
  countrycode = ['USD','EUR','CAD','GBP'];
  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
  }
  fun(event:Event)
  {
    const ele = event.target as HTMLSelectElement;
    //this.selected.emit(ele.value);
    console.log(ele.value);
    this.currencyService.changeCurrency(ele.value);
  }
}

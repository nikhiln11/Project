import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-currency1',
  templateUrl: './currency1.component.html',
  styleUrls: ['./currency1.component.css']
})
export class Currency1Component implements OnInit {
  @Output() setCur=new EventEmitter();
  contCode=['INR','USD','CAD','GBP','EUR'];
  constructor() { }

  ngOnInit(): void {
  }
  fun(event:Event)
  {
    const l=event.target as HTMLSelectElement;
    this.setCur.emit(l.value);
  }

}

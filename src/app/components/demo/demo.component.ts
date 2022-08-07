import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }
  demdata:string="Awesome ang";
  dvalue:number=90;
  value:string = "VAl";


  ngOnInit(): void {
  }
  fun()
  {
    alert("i m in trouble");
  }

}

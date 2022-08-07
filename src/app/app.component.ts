import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCode: string="INR";
  constructor(private userservice: UserService){}
  title = 'angular1';
  setCurrency(code:string)
{
  this.selectedCode=code;
}
appfun(code:string)
{
this.selectedCode=code;
}
}


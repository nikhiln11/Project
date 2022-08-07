import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
  isLoggedIn:boolean=false;
  signOut()
  {
    this.userService.logout();
   // this.isLoggedIn=false;

  }
  constructor(private userService: UserService) {
   }

   ngOnInit(): void {
    this.userService.userObservable.subscribe((user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

}

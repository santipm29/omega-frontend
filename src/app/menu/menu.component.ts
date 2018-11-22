import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../interfaces/user';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userService: UserService, private authenticationService: AuthenticationService,
    private router:Router) { }

  ngOnInit() {
  }
  logout(){
    this.authenticationService.logOut()
    .then(()=>{
      this.router.navigate(['login']);
    })
    .catch((error) => {
      console.log(error);
    });
  }

}

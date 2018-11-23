import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = {
    email:  null,
    password:  null,
  }
  formError = {
    state: false,
    message: ''
  };
  constructor(private authenticationService: AuthenticationService, private userService:UserService,
    private router:Router) { }

  ngOnInit() {
  }

  login(){
    if(this.form.email == null || this.form.password == null){
      this.formError.state = true;
      this.formError.message = 'Ingresa todos los campos';
    }else{
      this.authenticationService.loginWithEmail(this.form.email, this.form.password).then( (data) => {
        this.router.navigate(['home']);
      }).catch((error) => {
        this.formError.state = true;
        this.formError.message = 'Usuario o contraseña incorrecta';
        this.form.password = '';
      });
    }
    
}

}

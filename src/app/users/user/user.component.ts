import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string = null;
  surname: string = null;
  email: string = null;
  password: string = null;
  validateForm: boolean = false;
  
  constructor(private authenticationService: AuthenticationService, private userService:UserService) { }

  ngOnInit() {
  }

  validate(){
    if(this.name == null || this.surname == null || this.email == null || this.password == null){
      this.validateForm = true;
    }else{
      this.register();
    }
  }
  register() {
    this.authenticationService.registerWithEmail(this.email, this.password).then( (data) => {
      const user = {
        name: this.name,
        surname: this.surname,
        uid: data.user.uid,
        email: this.email,
      };
      this.userService.createUser(user).then((data2) => {
        swal("Buen trabajo!", "Usuario creado correctamente", "success");
        this.name = '';
        this.surname = '';
        this.email = '';
        this.password = '';
        this.validateForm = false;
      }).catch((error) => {
        swal("Ups!", "Ocurrio un error", "error");
        console.log(error);
      });
    }).catch((error) => {
      swal("Ups!", "Ocurrio un error", "error");
      console.log(error);
    });
  }

}

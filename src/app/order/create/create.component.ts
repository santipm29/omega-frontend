import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { OrderService } from 'src/app/services/order.service';
import {Order} from '../../interfaces/order';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  id:string = '';
  order: Order;
  constructor(private userService: UserService, private orderService:OrderService, private router:Router) { 

  }


  ngOnInit() {

}


}
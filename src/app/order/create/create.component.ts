import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { OrderService } from 'src/app/services/order.service';
import {Order} from '../../interfaces/order';
import { Router } from '@angular/router';
import { ProviderService } from 'src/app/services/provider.service';
import { Provider } from '../../interfaces/provider';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  id:string = '';
  order: Order;
  proveedor: Provider[];
  codigoproveedor:number;
  nombre:string;
  cantidad:number;
  puntoventa:string ;
  nombreproveedor:string;
  constructor(private userService: UserService, private orderService:OrderService,
    private providerService:ProviderService, private router:Router) { 

  }


  ngOnInit() {
    this.providerService.getProvider()
    .subscribe((data: Provider[])=>{
      this.proveedor = data;
      console.log(data);
    });
  }

  

  addProduct() : void{
    let product = {PLU:123,descripcion:this.nombre,cantidad:this.cantidad }
    this.order.productos.push(product);
    console.log(this.order.productos);
  }
prueba(codigo){
  this.puntoventa = codigo;
}

}
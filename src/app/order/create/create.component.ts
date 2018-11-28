import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { OrderService } from 'src/app/services/order.service';
import {Order} from '../../interfaces/order';
import {Product} from '../../interfaces/product';
import { Provider } from '../../interfaces/provider';
import { Router } from '@angular/router';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  id:string = '';
  order: Order;

  proveedor: Provider[];
  productos: Product[];

  codproveedor:number;
  nombreproveedor:string;
  nit:string;

  codproducto:number;
  descripcion:string;
  cantidad:number;

  puntoventa:string ;
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
    let product = {PLU:123,descripcion:this.nombreproveedor,cantidad:this.cantidad }
    this.order.productos.push(product);
    console.log(this.order.productos);
  }

  //Al seleccionar proveedor se cargan los productos de dicho proveedor al select de productos
  listProduct(codigo, nit, nombreproveedor){
    this.codproveedor = codigo;
    this.nit= nit;
    this.nombreproveedor = nombreproveedor;

    this.providerService.getProducts(codigo)
    .subscribe((data: Product[])=>{
      this.productos = data;
    });
}

}
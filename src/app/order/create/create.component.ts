import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { OrderService } from 'src/app/services/order.service';
import {User} from '../../interfaces/user';
import {Order} from '../../interfaces/order';
import {Product} from '../../interfaces/product';
import { Provider } from '../../interfaces/provider';
import { ProviderService } from 'src/app/services/provider.service';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  id:string = '';
  user: User;
  order: Order = new Order();
  

  proveedor: Provider[];
  productos: Product[];//productos que se reciben de la API
  product = []; //Array de productos que van en pedido
  tipoPedido: string;
  

  codproveedor:number;
  nombreproveedor:string;
  nit:string;

  codproducto:number;
  descripcion:string;
  cantidad:number;
  medida:string;

  puntoventa:string ;
  constructor(private userService: UserService, private orderService:OrderService,
    private providerService:ProviderService, private authenticationService:AuthenticationService) { 
      //Se trae el id del usuario que esta logueado en el momento
      this.order.productos = [];
      this.authenticationService.getStatus().subscribe((status) => {
        this.userService.getUserById(status.uid).valueChanges().subscribe((data: User) => {
          this.user = data;
          this.id = (this.user.uid);
        }, (error) => {
          console.log(error);
        });
      }, (error) => {
        console.log(error);
  });

  
  }

  ngOnInit() {
    //Consume la API que que trae todos los proveedores
    this.providerService.getProvider()
    .subscribe((data: Provider[])=>{
      this.proveedor = data;
    });
  }

  addProduct() : void{
    if(this.descripcion == null  || this.cantidad == null || this.codproducto == null){
      alert('Ingresa todos los datos del producto');
    }else{
      let product = {plu:this.codproducto,descripcion:this.descripcion,cantidad:this.cantidad,medida:this.medida };
      let p = {PLU:this.codproducto,cantidad:this.cantidad };
      this.product.push(product);
      this.cantidad = null;
      this.order.productos.push(p);
    }
   
    
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

submit(){
  this.order.codUsuario = this.id;
  this.order.fechaHoraPedido = this.date();
  this.order.estadoBodega = 1;
  this.order.estadoPedido = 1;
  this.order.estadoProveedor = 1;
  this.order.tipoPedido = this.tipoPedido;
  
}

delete(codigo){
  /*
  let index = this.product.indexOf(codigo);
  if (index >= 1) {
    this.product.splice(index, 1);
  }
  */
}

  date(){
    let fecha = new Date();
    let month = fecha.getMonth()+1;
    let day = fecha.getDate();
    let year = fecha.getFullYear();
    return (year+'/'+month+'/'+day);
  }

  clean(){
    
  }

}
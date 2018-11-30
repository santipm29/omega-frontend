import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { OrderService } from 'src/app/services/order.service';
import {User} from '../../interfaces/user';
import {Order} from '../../interfaces/order';
import {Product} from '../../interfaces/product';
import { Provider } from '../../interfaces/provider';
import { ProviderService } from 'src/app/services/provider.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import swal from 'sweetalert';


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
      swal("Ingresa todos los datos del producto");
    }else
    if(this.cantidad == 0){
      swal("Ingresa una cantidad diferente de cero");
    }else{
      let product = {plu:this.codproducto,descripcion:this.descripcion,cantidad:this.cantidad,medida:this.medida };
      let p = {PLU:this.codproducto,cantidadProducto:this.cantidad };
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
  if(this.tipoPedido == null || this.order.productos.length == 0 || this.codproveedor == null){
    swal("Información", "Ingresa todos los campos del formulario", "info");
  }else{
    this.order.codUsuario = this.id;
  this.order.fecha = this.date();
  this.order.codProveedor = this.codproveedor;
  this.order.estadobodega = 1;
  this.order.estadopedido = 1;
  this.order.codPuntoEntrega = 1;
  this.order.estadoproveedor = 1;
  this.order.tipoPedido = this.tipoPedido;
  this.orderService.submitOrder(this.order).subscribe(data=>{
    swal("Pedido", "Realizado con exito", "success");
  },error=>{
    swal("Información del pedido", "No se pudo guardar la información, intenta de nuevo", "error");
  })
  }
  
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
    return (fecha);
  }

  clean(){
   
  }

}
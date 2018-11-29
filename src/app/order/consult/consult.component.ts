import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import {Order} from '../../interfaces/order';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {
  codigo_pedido:string;
  order: Order = new Order();

  constructor(private activatedRoute: ActivatedRoute,private orderService:OrderService) {
    this.order.productos = [];
   }

  ngOnInit() {
    this.codigo_pedido = this.activatedRoute.snapshot.params.codigoPedido;
    this.orderService.getOrder(this.codigo_pedido);

    this.orderService.getOrder(this.codigo_pedido)
    .subscribe((data: Order)=>{
      this.order = data;
      console.log(this.order);
    });
  }

  showProduct(codigo){

  }

}

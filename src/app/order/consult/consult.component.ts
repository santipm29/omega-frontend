import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {
  codigo_pedido:string;
  constructor(private activatedRoute: ActivatedRoute) {
   }

  ngOnInit() {
    this.codigo_pedido = this.activatedRoute.snapshot.params.codigoPedido;
    console.log(this.codigo_pedido);
  }

}

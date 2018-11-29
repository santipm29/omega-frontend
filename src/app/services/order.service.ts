import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private URL = 'http://192.168.11.21:8080/consultasPedido-1.0-SNAPSHOT/webresources/com.mycompany.consultaspedido';
  private URL_PEDIDO = 'http://192.168.11.21:8080/consultasPedido-1.0-SNAPSHOT/webresources/org.expertics.pedidos.service.productopedido/pedido/';
  constructor(private http:HttpClient) { }

  submitOrder(order){
    return this.http.post(this.URL, order).toPromise()
  }

  getOrder(id){
    return this.http.get(this.URL_PEDIDO + `${id}`);
  }

}

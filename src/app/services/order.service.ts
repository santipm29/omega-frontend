import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private URL_POSTPEDIDO = 'http://192.168.11.7:8080/dbpedidos-1.0-SNAPSHOT/webresources/com.mycompany.dbpedidos.service.pedidos/';
  private URL_GETPEDIDO = 'http://192.168.11.21:8080/consultasPedido-1.0-SNAPSHOT/webresources/org.expertics.pedidos.service.productopedido/pedido/';
  //trae determinado pedido
  
  constructor(private http:HttpClient) { 
    
  }

  submitOrder(order){
    return this.http.post(this.URL_POSTPEDIDO, order);
  }

  getOrder(id){
    return this.http.get(this.URL_GETPEDIDO + `${id}`);
  }

}

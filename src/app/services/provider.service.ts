import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
private URL = 'http://192.168.11.21:8080/consultasPedido-1.0-SNAPSHOT/webresources/com.mycompany.consultaspedido';
  constructor(private http:HttpClient) {
   }

  getProvider(){
  return this.http.get(this.URL + '.proveedor');
}

  getProducts(id){
    return this.http.get(this.URL + `.productos/${id}`);
  }

}

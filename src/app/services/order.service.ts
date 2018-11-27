import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private URL = '';
  constructor(private http:HttpClient) { }

  getProvider(){
    return this.http.get(this.URL);
  }

}

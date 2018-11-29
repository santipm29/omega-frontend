import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';
import { Provider } from '../interfaces/provider';
import {Product} from '../interfaces/product';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
proveedor: Provider[];
productos: Product[];
page: number = 1; 
  constructor(private providerService:ProviderService) { }

  ngOnInit() {
    this.providerService.getProvider()
    .subscribe((data: Provider[])=>{
      this.proveedor = data;
      console.log(data);
    });
  }

  showProduct(codigo){
    this.providerService.getProducts(codigo)
    .subscribe((data: Product[])=>{
      this.productos = data;
    });
  }

}

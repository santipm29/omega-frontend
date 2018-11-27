import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';
import { Provider } from '../interfaces/provider';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
proveedor: Provider[];
  constructor(private providerService:ProviderService) { }

  ngOnInit() {
    this.providerService.getProvider()
    .subscribe((data: Provider[])=>{
      this.proveedor = data;
      console.log(data);
    });
  }

}

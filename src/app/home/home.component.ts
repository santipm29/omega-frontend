import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  codigo_pedido:string;
  error:boolean = false;
  constructor(private router:Router) { }

  ngOnInit() {
  }

submit(){
  swal({
    content: {
      element: "input",
      showCancelButton: true,
      buttons: true,
      attributes: {
        placeholder: "Ingresa el número del pedido",
        type: "number",
      },
    },
  })
  .then((value) => {
    if(value !== null){
      this.router.navigate([`order/consult/${value}`]); 
    }
  });
  
}


}

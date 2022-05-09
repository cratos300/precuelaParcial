import { Component, OnInit } from '@angular/core';
import { Actor } from '../clases/actor';
import { AltaActorService } from '../services/alta-actor.service';

@Component({
  selector: 'app-checkout-pelicula',
  templateUrl: './checkout-pelicula.component.html',
  styleUrls: ['./checkout-pelicula.component.css']
})
export class CheckoutPeliculaComponent implements OnInit {

  unactorr!:Actor;
  listcheckout:any = []; 
  
  constructor(act: AltaActorService) 
  {
    act.getAll().snapshotChanges().subscribe(e=>{
      for(let i =0 ; i<e.length;i++)
      {
        this.listcheckout.push(e[i].payload.doc.data());
      } 
      console.log(this.listcheckout);
      
    }
   )

   }

  ngOnInit(): void {
  }
  funcionouput(data:any)
  {
    this.unactorr = data;
  }
}

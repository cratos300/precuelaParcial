import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CheckoutPeliculaComponent } from './checkout-pelicula/checkout-pelicula.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';



const routes: Routes = [
  {path:'',redirectTo : 'checkoutPelicula',pathMatch: 'full'},
  {path:'busqueda',component:BusquedaComponent},
  {path:'pelicula/alta',component:PeliculaAltaComponent},
  {path:'actor/alta',component:ActorAltaComponent},
  {path:'actor/listado',component:ActorListadoComponent},
  {path:'pelicula/listado',component:PeliculaListadoComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'checkoutPelicula',component:CheckoutPeliculaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

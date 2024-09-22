import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AbautComponent} from "./components/abaut/abaut.component";
import {ShareComponent} from "./components/share/share.component";
import {MomentDetailsComponent} from "./components/moment-details/moment-details.component";
import {EditarMomentComponent} from "./components/editar-moment/editar-moment.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'moments/:id', component: MomentDetailsComponent},
  {path: 'sobre', component: AbautComponent},
  {path:'compartilhar', component: ShareComponent},
  {path: 'editar/:id', component: EditarMomentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

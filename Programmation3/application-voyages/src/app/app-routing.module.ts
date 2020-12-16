import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AproposComponentComponent } from './apropos-component/apropos-component.component';
import { ForfaitsYComponentComponent } from './forfaits-y-component/forfaits-y-component.component';
import { ForfaitsXComponentComponent } from './forfaits-x-component/forfaits-x-component.component';
import { AdministrationComponentComponent } from './administration-component/administration-component.component';

const routes: Routes = [
  { path: 'app-acceuil', component: AcceuilComponent},
  { path: 'forfaits-x-component', component: ForfaitsXComponentComponent},
  { path: 'forfaits-y-component', component: ForfaitsYComponentComponent},
  { path: 'apropos-component', component: AproposComponentComponent},
  { path: 'app-administration-component', component: AdministrationComponentComponent},
  { path: '', redirectTo: '/app-acceuil', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

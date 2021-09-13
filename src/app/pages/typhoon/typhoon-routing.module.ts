import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentTyphoonComponent } from './pages/current-typhoon/current-typhoon.component';
import { TyphoonDetailsComponent } from './pages/typhoon-details/typhoon-details.component';
import { TyphoonsListComponent } from './pages/typhoons-list/typhoons-list.component';

const routes: Routes = [
  {path:'year/:year',component:TyphoonsListComponent},
  {path:'current',component:CurrentTyphoonComponent},
  {path:':id',component:TyphoonDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TyphoonRoutingModule { }

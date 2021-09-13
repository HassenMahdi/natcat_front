import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TyphoonRoutingModule } from './typhoon-routing.module';
import { TyphoonsListComponent } from './pages/typhoons-list/typhoons-list.component';
import { TyphoonDetailsComponent } from './pages/typhoon-details/typhoon-details.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { CurrentTyphoonComponent } from './pages/current-typhoon/current-typhoon.component';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
  declarations: [TyphoonsListComponent, TyphoonDetailsComponent, CurrentTyphoonComponent],
  imports: [
    CommonModule,
    TyphoonRoutingModule,
    NzTableModule,
    NzCardModule,
  ]
})
export class TyphoonModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TyphoonRoutingModule } from './typhoon-routing.module';
import { TyphoonsListComponent } from './pages/typhoons-list/typhoons-list.component';
import { TyphoonDetailsComponent } from './pages/typhoon-details/typhoon-details.component';

import { CurrentTyphoonComponent } from './pages/current-typhoon/current-typhoon.component';

// NG ZORRO MODULES
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';

import { IconsProviderModule } from 'src/app/icons-provider.module';


@NgModule({
  declarations: [TyphoonsListComponent, TyphoonDetailsComponent, CurrentTyphoonComponent],
  imports: [
    CommonModule,
    TyphoonRoutingModule,

    // NG ZORRO MODULES
    NzTableModule,
    NzCardModule,
    NzImageModule,
    NzBreadCrumbModule,
    NzStatisticModule,
    NzGridModule,
    NzPageHeaderModule,
    NzEmptyModule,
    NzModalModule,
    NzCollapseModule,
    NzButtonModule,
    NzSpaceModule,

    // ICONS
    IconsProviderModule,
  ]
})
export class TyphoonModule { }

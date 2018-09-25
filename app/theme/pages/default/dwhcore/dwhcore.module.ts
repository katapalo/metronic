import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '@app-modules/shared/shared.module';
import {Routes, RouterModule} from '@angular/router';
import {LayoutModule} from '../../../layouts/layout.module';
import {DefaultComponent} from '../default.component';
import {DefaultcoreComponent} from './defaultcore.component';
import {DwhcoreComponent} from './dwhcore.component';
import {EtlComponent} from '@app-components/dwhcore/etl/etl.component';
import {StateComponent} from '@app-components/dwhcore/state/state.component';
import { MessageService } from 'primeng/api';

import { StageComponent } from '@app-components/dwhcore/etl/childs/stage.component';
import { PhaseComponent } from '@app-components/dwhcore/etl/childs/phase.component';
import { ModalComponent } from '@app-components/modal/modal.component';



const routes: Routes = [
  {
    'path': '',
    'component': DefaultcoreComponent,
    'children': [
      {
        'path': '',
        'component': DwhcoreComponent,
      },
      {
        'path': 'state',
        'component': StateComponent,
      },     
      {
        'path': 'etl',
        'component': EtlComponent,
        'children':[
          {
            'path': 'stage',
            'component': StageComponent,
          },
          {
            'path': 'phase',
            'component': PhaseComponent,
          }
        ]
      }     
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    ,LayoutModule
    ,SharedModule      
  ], exports: [
    RouterModule    
  ], declarations: [
    DefaultcoreComponent,
    DwhcoreComponent,
    EtlComponent,
    StateComponent,  
    StageComponent,
    PhaseComponent,
    ModalComponent    
  ],
  providers:[]
})
export class DwhcoreModule {
}
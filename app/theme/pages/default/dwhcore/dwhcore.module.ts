import {NgModule} from '@angular/core';
import {SharedModule} from '@app-modules/shared/shared.module';
import {Routes, RouterModule} from '@angular/router';
import {LayoutModule} from '../../../layouts/layout.module';
import {DefaultComponent} from '../default.component';
import {DefaultcoreComponent} from './defaultcore.component';
import {DwhcoreComponent} from './dwhcore.component';
import {EtlComponent} from '@app-components/dwhcore/etl/etl.component';
import {StateComponent} from '@app-components/dwhcore/state/state.component';



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
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),SharedModule
    ,LayoutModule
  ], exports: [
    RouterModule,
  ], declarations: [
    DefaultcoreComponent,
    DwhcoreComponent,
    EtlComponent,
    StateComponent,    
  ],
})
export class DwhcoreModule {
}
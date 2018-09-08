import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '@app-modules/shared/shared.module';
import {Routes, RouterModule} from '@angular/router';
import {LayoutModule} from '../../../layouts/layout.module';
import {DefaultComponent} from '../default.component';

import {AdminComponent} from './admin.component';
import { UserComponent } from '@app-components/admin/user.component';
import { DashboardComponent } from '@app-components/admin/dashboard.component';





const routes: Routes = [
  {
    'path': '',
    'component': DefaultComponent,
    'children': [
      {
        'path': 'user',
        'component': UserComponent,
      },
      {
        'path': 'dashboard',
        'component': DashboardComponent,
      },
      {
        'path': '',
        'redirectTo': 'user',
        'pathMatch': 'full',
    },
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
    RouterModule,    
  ], declarations: [
    UserComponent,
    DashboardComponent        
  ],
  providers:[]
})
export class AdminModule {
}
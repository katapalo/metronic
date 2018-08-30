import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layouts/layout.module';

import { DefaultComponent } from '../default.component';
import { IndexComponent } from './index.component';
import { AmChartsModule  } from '@amcharts/amcharts3-angular';

import {SharedModule} from '@app-modules/shared/shared.module';


const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': IndexComponent
            }            
        ],
    },
];


@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule,FormsModule
        ,SharedModule
        ,AmChartsModule   ,                       
    ], exports: [
        RouterModule
    ], providers: [             
    ], declarations: [
        IndexComponent
    ],
})
export class IndexModule {
}
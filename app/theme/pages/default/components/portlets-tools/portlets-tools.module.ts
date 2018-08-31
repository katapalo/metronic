import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PortletsToolsComponent } from './portlets-tools.component';
import { LayoutModule } from '../../../../layouts/layout.module';
import { DefaultComponent } from '../../default.component';
import {SharedModule} from '@app-modules/shared/shared.module';
import { EtlComponent1 } from '@app/theme/pages/default/components/portlets-tools/etl/etl.component';


const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": PortletsToolsComponent
            },
            {
                "path": "uno",
                "component": EtlComponent1
            }
        ]
    }
];
@NgModule({imports: [
// CommonModule,
RouterModule.forChild(routes)
,LayoutModule
// ,SharedModule
],exports: [
RouterModule
],declarations: [
PortletsToolsComponent,
EtlComponent1
]})
export class PortletsToolsModule  {

constructor(){
    debugger;
}

}
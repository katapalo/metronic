import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layouts/layout.module';

import { DefaultComponent } from '../default.component';
import { IndexComponent } from './index.component';
import { AmChartsModule  } from '@amcharts/amcharts3-angular';


import {
	AccordionModule,
	ButtonModule,
	CheckboxModule,
	ChipsModule,
	CodeHighlighterModule,
	ColorPickerModule,
	InputMaskModule,
	FieldsetModule,
	GrowlModule,
	InputTextModule,
	MultiSelectModule,
	PanelModule,
	RadioButtonModule,
	SelectButtonModule,
	SplitButtonModule,
    TabViewModule,
    ToolbarModule
} from 'primeng/primeng';


//import {TreeModule} from 'primeng/tree';

const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': IndexComponent,
            },
        ],
    },
];


@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule,FormsModule
        ,AmChartsModule                   
        //prime modules
        ,MultiSelectModule
        ,FieldsetModule   
        ,ButtonModule
        ,SplitButtonModule
        ,ToolbarModule
    ], exports: [
        RouterModule
    ], providers: [             
    ], declarations: [
        IndexComponent
    ],
})
export class IndexModule {
}
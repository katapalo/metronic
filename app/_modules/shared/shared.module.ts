import {NgModule,OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SharedComponent} from './shared.component';

//import {AngularMultiSelectModule, AngularMultiSelect } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';

import {
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    MultiSelectModule,
    CalendarModule,
    FieldsetModule,
    TreeModule,
    EditorModule,
    OrganizationChartModule,
    MessageService
} from 'primeng/primeng';


@NgModule({
  imports: [  
     CommonModule
    // FormsModule,
    // ToolbarModule,
    // AngularMultiSelectModule,
    // MultiSelectModule,
    // CalendarModule,
    // FieldsetModule,
    // TreeModule,
    // EditorModule
  ],
  exports:[
    CommonModule,
    FormsModule,
   // AngularMultiSelectModule,
   // AngularMultiSelect,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    MultiSelectModule,
    CalendarModule,
    FieldsetModule,
    TreeModule,
    EditorModule,
    OrganizationChartModule,
    ToastModule,
    TableModule
    ],
  providers:[
    MessageService
  ],
  declarations: [
    SharedComponent
  ]
})
export class SharedModule implements OnInit {
  constructor(){
  }
  ngOnInit(){
    
  }
} 
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMultiSelectModule, AngularMultiSelect } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
 
import {
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    MultiSelectModule,
    CalendarModule,
    FieldsetModule,
    TreeModule,
} from 'primeng/primeng';

@NgModule({
  imports: [
    ToolbarModule,
    AngularMultiSelectModule,
    MultiSelectModule,
    CalendarModule,
    FieldsetModule,
    TreeModule
  ],
  exports:[
    CommonModule,
    AngularMultiSelect,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    MultiSelectModule,
    CalendarModule,
    FieldsetModule,
    TreeModule
    ],
  declarations: []
})
export class SharedModule {} 
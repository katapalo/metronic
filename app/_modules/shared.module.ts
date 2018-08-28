import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMultiSelectModule, AngularMultiSelect } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
 
import {
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    MultiSelectModule
} from 'primeng/primeng';

@NgModule({
  imports: [
    ToolbarModule,
    AngularMultiSelectModule,
    MultiSelectModule
  ],
  exports:[
    CommonModule,
    AngularMultiSelect,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    MultiSelectModule
    ],
  declarations: []
})
export class SharedModule {} 
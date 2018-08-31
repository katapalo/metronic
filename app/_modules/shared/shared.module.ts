import {NgModule,OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SharedComponent} from './shared.component';

//import {AngularMultiSelectModule, AngularMultiSelect } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

 
import {
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    MultiSelectModule,
    CalendarModule,
    FieldsetModule,
    TreeModule,
    EditorModule
} from 'primeng/primeng';


@NgModule({
  imports: [  
     CommonModule,  
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
    EditorModule
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
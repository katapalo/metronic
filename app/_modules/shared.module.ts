import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
    ToolbarModule,
    ButtonModule,
    SplitButtonModule
} from 'primeng/primeng';

@NgModule({
  imports: [
    ToolbarModule
  ],
  exports:[
    CommonModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    ],
  declarations: []
})
export class SharedModule {} 
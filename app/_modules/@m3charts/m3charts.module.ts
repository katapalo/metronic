import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { SerialComponent } from './serial.component';
import { ChartComponent } from './m3charts.chart.component';


@NgModule({
    imports: [
        CommonModule,AmChartsModule        
    ], exports: [
        SerialComponent,
        ChartComponent,     
    ], providers: [                    
    ], declarations: [ 
        SerialComponent,
        ChartComponent
    ]
})
export class M3chartsModule {
}
import { Component,Input,OnInit } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { TypesCharts } from './m3charts.types';

@Component({
    selector: "m3chart-serial",
    providers:[ TypesCharts ],
    template:
    `  <h2>Id:{{id}}</h2>
        <div id="{{id}}" style="height: 500px"></div>       
    `
})
export class SerialComponent implements OnInit {
    @Input() dataset : any;
    @Input() id: string = "0"
    public chart: AmChart;    
    
    constructor(private AmCharts: AmChartsService,private configChart:TypesCharts ) {        
    }

    ngOnInit() {       
    }
    ngAfterViewInit(){
         var config = this.configChart.serial1;         
         config.dataProvider = this.dataset;         
         this.chart = this.AmCharts.makeChart(this.id,config);                        
       // this.chart1.validateData();
    }
    
    
}

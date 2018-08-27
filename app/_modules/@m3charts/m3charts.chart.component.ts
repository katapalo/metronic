import { Component,Input,OnInit } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";


@Component({
    selector: "m3chart-chart",    
    template:
    `  <h2>Id:{{id}}</h2>
        <div id="{{id}}" style="height: 500px"></div>     
    `
})
export class ChartComponent implements OnInit {
    @Input() dataset : any;
    @Input() id: string = "0";
    @Input() config: any = {
        dataProvider:[]
    };
    public chart: AmChart;
    
    constructor(private AmCharts: AmChartsService) {        
    }

    ngOnInit() {                              
    }
    ngAfterViewInit(){    
        this.chart = this.AmCharts.makeChart(this.id,this.config);                              
    }
    
    
}

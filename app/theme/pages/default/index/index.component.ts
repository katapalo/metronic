import { Component, OnInit, AfterViewInit, ViewEncapsulation,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AmChart,AmChartsService } from '@amcharts/amcharts3-angular';
import { SelectItem,Fieldset } from 'primeng/primeng';
import { DatosService } from '@app-services/datos.service';
//import { ScriptLoaderService } from '@app-services/script-loader.service';

interface totalesJson {
    cantidad_articulos:number;
    imp_total:number
};

class Filtro {
    datos: SelectItem[];
    values: string [];
    constructor(){
        this.values = [];
    }
}


@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        '../../../../../../node_modules/primeng/resources/primeng.css',
        '../../../../../../node_modules/primeng/resources/themes/nova-light/theme.css',
        '../../../../../../node_modules/primeicons/primeicons.css'
    ]
})

export class IndexComponent implements OnInit,AfterViewInit
{     
    private albaranes: any;
    private chartMixMarcas: AmChart;
    private chartTopVentas: AmChart;
    private chartCompras: AmChart;

    filtro1: Filtro;
    filtro2: Filtro;
    filtro3: Filtro;
    filtro4: Filtro;
    filtro5: Filtro;

    totales:totalesJson[] = [{cantidad_articulos:0,imp_total:0}];
    fecha1:Date;
    fecha2:Date;
    dateLocale:any;

    @ViewChild('filtros') filtros: Fieldset;
  


    constructor(private AmCharts: AmChartsService, private datosService: DatosService) { 
        debugger;
    }

    param3 = [
        {
          "label":"fecha_inicio",
          "value":"2018-04-20"
        },
        {
          "label":"fecha_fin",
          "value":"2018-04-30"
        }           
      ];  
      
    ngOnInit() {       
        this.filtros.collapsed = true; 
        this.dateLocale = {
            firstDayOfWeek: 1,
            dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
            dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
            dayNamesMin: [ "D","L","M","X","J","V","S" ],
            monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
            monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
            today: 'Hoy',
            clear: 'Borrar'
        };

        this.chartTopVentas = this.AmCharts.makeChart("chartdiv1",this.getConfig1());
        this.chartCompras = this.AmCharts.makeChart("chartdiv2", this.getConfig2() );
        this.chartMixMarcas = this.AmCharts.makeChart("chartdiv3",this.getConfig3());

        this.refreshDataCharts(this.param3);
        //datos filtros
        this.filtro1 = new Filtro();
        this.filtro2 = new Filtro();
        this.filtro3 = new Filtro();
        this.filtro4 = new Filtro();
        this.filtro5 = new Filtro();

        this.datosService.getDatos(6,"").subscribe(data => {             
            this.filtro1.datos = data.json();                                   
        });
        
        this.datosService.getDatos(7,"").subscribe(data => {             
            this.filtro2.datos = data.json();            
        });
        this.datosService.getDatos(8,"").subscribe(data => {             
            this.filtro3.datos = data.json();            
        });
        this.datosService.getDatos(9,"").subscribe(data => {             
            this.filtro4.datos = data.json();            
        });
        this.datosService.getDatos(10,"").subscribe(data => {             
            this.filtro5.datos = data.json();            
        });
        
        this.datosService.getDatos(11,this.param3).subscribe(data => {             
            this.totales = data.json();                                 
        });
        
    }

    ngAfterViewInit() {
    }

    refreshDataCharts(param)
    {
        this.datosService.getDatos(4,param).subscribe(data => {             
            this.chartTopVentas.dataProvider = data.json();
            this.chartTopVentas.validateData();            
        });  
        this.datosService.getDatos(3,param).subscribe(data => {             
            this.chartCompras.dataProvider = data.json();
            this.chartCompras.validateData();            
        });  
        this.datosService.getDatos(1,param).subscribe(data => {             
            this.chartMixMarcas.dataProvider = data.json();
            this.chartMixMarcas.validateData();            
        });  
        this.datosService.getDatos(5,param).subscribe(data => {             
            this.albaranes = data.json();            
        });
    }

    getConfig1()
    {  
        var config = {            
            "type": "serial",
            "theme": "light",
            "categoryField": "des_articulo",
            "rotate": true,
            "autoMarginOffset": 40,
            "marginRight": 60,
            "marginTop": 60,
            "startDuration": 1,
            "fontSize": 13,
            "categoryAxis": {
                "gridPosition": "start"
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-1",
                    "labelText": "",
                    "title": "",
                    "type": "column",
                    "valueField": "cantidad_articulos"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": ""
                }
            ],
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": []                                                 
        };
        return config;
    }
    getConfig2() 
    {
        var config = {
            type: "serial",
            theme: "light",
            marginRight: 80,
            autoMarginOffset: 20,
            marginTop: 7,
            dataProvider: [],
            valueAxes: [{
                axisAlpha: .2,
                dashLength: 1,
                position: "left"
            }],
            mouseWheelZoomEnabled: !0,
            graphs: [{
                id: "g1",
                balloonText: "[[value]]",
                bullet: "round",
                bulletBorderAlpha: 1,
                bulletColor: "#FFFFFF",
                hideBulletsCount: 50,
                title: "red line",
                valueField: "imp_neto",
                useLineColorForBulletBorder: !0,
                balloon: {
                    drop: !0
                }
            }],
            chartScrollbar: {
                autoGridCount: !0,
                graph: "g1",
                scrollbarHeight: 40
            },
            chartCursor: {
                limitToGraph: "g1"
            },            
            categoryField: "fecha_bi",
            categoryAxis: {
                parseDates: !0,
                axisColor: "#DADADA",
                dashLength: 1,
                minorGridEnabled: !0
            },
            export: {
                enabled: false
            }
        };
        return config;
    }
    getConfig3()
    {
        var config = {            
            "type": "pie",
            "theme": "light",
            "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
            "depth3D": 6,
            "labelRadius": 0,
            "titleField": "des_marca_articulo",
            "valueField": "cantidad_articulos",
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "align": "center",
                "markerType": "circle"
            },
            "titles": [],
            "dataProvider": []                             
        };
        return config;
    }
    onFiltros()
    {
        var filtros: any[] = [this.filtro1.values,this.filtro2.values,this.filtro3.values,
            this.filtro4.values,this.filtro5.values];
       
        this.filtros.collapsed = true;
                
        let param = [
            {
                "label":"fecha_inicio",
                "value":this.fecha1.toISOString()
              },
              {
                "label":"fecha_fin",
                "value":this.fecha2.toISOString()
              }            
          ];     
         if(this.filtro1.values.length > 0)
         {
            param.push({
                "label":"des_marca_articulo",
                "value":this.filtro1.values.toString()
            }); 
         }
         
         if(this.filtro2.values.length > 0)
         {
            param.push({
                "label":"des_tipo_articulo",
                "value":this.filtro2.values.toString()
            });     
         }
         if(this.filtro3.values.length > 0)
         {
            param.push({
                "label":"des_perfil_neumtatico",
                "value":this.filtro3.values.toString()
            });     
         }
         if(this.filtro4.values.length > 0)
         {
            param.push({
                "label":"des_radio_neumatico",
                "value":this.filtro4.values.toString()
            });     
         }
         if(this.filtro5.values.length > 0)
         {
            param.push({
                "label":"des_ancho_neumatico",
                "value":this.filtro5.values.toString()
            });     
         }
         this.datosService.getDatos(11,param).subscribe(data => {             
            this.totales = data.json();                        
        });
        this.refreshDataCharts(param);
                
    }
}
import { Injectable } from '@angular/core';
import { M3chartsModule } from './m3charts.module';

export class TypesCharts {
    constructor() {}

    public serial1 = {
        type: "serial",
        theme: "light",
        dataProvider: [],
        gridAboveGraphs: !0,
        startDuration: 1,
        graphs: [{
            balloonText: "[[category]]: <b>[[value]]</b>",
            fillAlphas: .8,
            lineAlpha: .2,
            type: "column",
            valueField: "visits"
        }],
        chartCursor: {
            categoryBalloonEnabled: !1,
            cursorAlpha: 0,
            zoomable: !1
        },
        categoryField: "country",
        categoryAxis: {
            gridPosition: "start",
            gridAlpha: 0,
            tickPosition: "start",
            tickLength: 20
        },
        export: {
            enabled: !0
        }
    }
}
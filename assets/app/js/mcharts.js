

var amChartsChartsDemo = function() { 
    return {
        init: function() {
            AmCharts.makeChart("m_amcharts_1", {
                    type: "serial",
                    theme: "light",
                    dataProvider: [{
                        country: "USA",
                        visits: 2025
                    }, {
                        country: "China",
                        visits: 1882
                    }, {
                        country: "Japan",
                        visits: 1809
                    }, {
                        country: "Brazil",
                        visits: 395
                    }],
                    valueAxes: [{
                        gridColor: "#FFFFFF",
                        gridAlpha: .2,
                        dashLength: 0
                    }],
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
                })
        }
    }
}();

let prueba = () => {
   amChartsChartsDemo.init();
   console.log("hola2");
}
function prueba0(){
    console.log("hola0");
}

//jQuery(document).ready(function() {
  //  amChartsChartsDemo.init()
//});

let add = (a, b) => {
    return a + b;
  }
  
  let subtract = (a, b) => {
    return a - b;
  }
  
  let multiply = (a, b) => {
    return a * b;
  }
  
  let divide = (a, b) => {
    return a / b;
  }
  
  module.exports = {
    add        : add,
    subtract   : subtract,
    multiply   : multiply,
    divide     : divide,
    prueba     : prueba,
    prueba0    : prueba0
  } 
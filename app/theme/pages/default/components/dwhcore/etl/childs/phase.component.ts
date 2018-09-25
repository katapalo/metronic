import { Component,ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'etl-phase',
    templateUrl: './phase.component.html',
    encapsulation: ViewEncapsulation.None,  
})

export class PhaseComponent
{   
    ngAfterViewInit()
    {        
        (<any>$('#editor1')).markdown({                               
            disabledButtons:["Bold","Italic","Heading","List","Code","Quote","Image","Url","Preview"],
            hiddenButtons:['cmdUrl','cmdImage',"Preview"],             
            onFocus: function(e) {
                console.log("hola");
            },
            onShow: function(e){                
                // $(".btn-toolbar").remove();
            }
        });      
    } 
}
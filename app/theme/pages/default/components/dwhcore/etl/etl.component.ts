import { Component,ViewEncapsulation } from '@angular/core';
//import { DatosService } from '@app-services/datos.service';

@Component({
    selector: 'app-etl',
    templateUrl: './etl.component.html',  
   // encapsulation: ViewEncapsulation.None,
    styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }
        :host ::ng-deep .ui-splitbutton {
            margin-left: .25em;
        }
        :host ::ng-deep .ui-splitbutton button {
            margin-right: 0;
        }
    `]
})

export class EtlComponent
{     
   
    constructor() {         
    }    

    
}
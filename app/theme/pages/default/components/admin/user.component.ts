import { Component,ViewEncapsulation,OnInit,AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '@app-services/script-loader.service';
import { DatosService } from '@app-services/datos.service';

import { StateAppService } from '@app-services/state-app.service';

export interface Car {
    vin;
    year;
    brand;
    color;
}



@Component({
    selector: 'app-users',
    templateUrl: './user.component.html',  
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        '../../../../../../../node_modules/primeng/resources/primeng.css',
        '../../../../../../../node_modules/primeng/resources/themes/nova-light/theme.css',
        '../../../../../../../node_modules/primeicons/primeicons.css'
    ]
})

export class UserComponent implements OnInit,AfterViewInit
{     
    cars: Car[];

    constructor(private _script: ScriptLoaderService,private datosService: DatosService) {                  
    }    

    ngOnInit(){        
        this.datosService.getUsers().then(datos=>this.cars = datos);
        
    }
    
    ngAfterViewInit(){        
    }      

}
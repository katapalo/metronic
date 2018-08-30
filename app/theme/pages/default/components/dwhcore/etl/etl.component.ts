import { Component,ViewEncapsulation,AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '@app-services/script-loader.service';
//import { DatosService } from '@app-services/datos.service';
import {EditorModule} from 'primeng/editor';

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

export class EtlComponent implements AfterViewInit
{     
   textoEditor:string;
    constructor(private _script: ScriptLoaderService) {         
    }    

    ngAfterViewInit(){
        // this._script.loadScripts('app-widgets-bootstrap-markdown',
        // ['assets/demo/default/custom/components/forms/widgets/bootstrap-markdown.js']);
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
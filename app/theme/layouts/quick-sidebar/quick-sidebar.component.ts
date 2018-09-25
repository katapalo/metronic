import { Component,Input, OnInit, ViewEncapsulation,ViewChild,ElementRef } from '@angular/core';
import { Helpers } from '../../../helpers';
import { DatosService } from '@app-services/datos.service';
import { EtlComponent } from '@app-components/dwhcore/etl/etl.component'
import { StateAppService } from '@app-services/state-app.service';

import {
    TreeNode,
    OrganizationChartModule
} from 'primeng/primeng';
import { EventManager } from '@angular/platform-browser';

@Component({
    selector: "app-quick-sidebar",
    templateUrl: "./quick-sidebar.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class QuickSidebarComponent implements OnInit {
    
   
    activeNode : any = {"children":[{"estado":""}]};

    @ViewChild('mdStage') mdStage: ElementRef;
   
    constructor(private datosService: DatosService       
       ) {

    }
    ngOnInit() {
    }
      
}
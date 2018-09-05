import { Component,Input, OnInit, ViewEncapsulation } from '@angular/core';
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

    selectedFile3: TreeNode;
    filesTree: TreeNode[];

   
    constructor(private datosService: DatosService,private stateService:StateAppService) {

    }
    ngOnInit() {

        this.datosService.getEtlTree().then(res=>{
            this.filesTree = res;
        });
    }
    nodeSelect(event){
        console.log(event.node.typeNodo);
        this.datosService.getStepsJob([{
            "label":"param_nombre_proceso",
            "value":event.node.label
        }]).then(res =>{            
            this.stateService.changeTreeNode(res);  
            debugger;   
                          
        });        
    }
}
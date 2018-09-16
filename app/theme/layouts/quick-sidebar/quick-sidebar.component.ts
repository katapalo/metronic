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

    selectedFile3: TreeNode;
    filesTree: TreeNode[];
    mdFormStage: any = {};
    activeNode : any = {"children":[{"estado":""}]};

    @ViewChild('mdStage') mdStage: ElementRef;
   
    constructor(private datosService: DatosService,private stateService:StateAppService) {

    }
    ngOnInit() {

        this.datosService.getEtlTree().then(res=>{
            this.filesTree = res;
        });
    }

    //cuando se selecciona un nodo del arbol
    nodeSelect(event){     
        
        //Borramos un nodo si tiene error
        if(this.activeNode.children[0] != null && this.activeNode.children[0].estado != null &&
             this.activeNode.children[0].estado == "error") this.activeNode.children = [];

        //no hacemos nada si el nodo es un nodo con error: se ha borrado en el paso anterior
        if(event.node.estado != null && event.node.estado == "error") return;
        this.activeNode = event.node;
        console.log(event.node.typeNodo);
        var param = [
            {
                "label":"param_nombre_proceso",
                "value":event.node.label
            },
            {
                "label":"param_tipo_nodo",
                "value":event.node.typeNodo
            }
        ];
        debugger;
        if(['dim','fact','dds','table'].find(r=>r == event.node.typeNodo))
        {        
            this.datosService.getDataNode(param).then(res =>{            
               this.stateService.changeTreeNode(res);                                                                
            }); 
        }                      
    }
    //formulario de nueva tabla de stage
    newTableStage(){      
        this.mdFormStage.nombre_proceso_carga = this.activeNode.label;
        debugger;
        var param = [
            {
                "label":"param_modelo",
                "value":JSON.stringify(this.mdFormStage)
            }
        ];        
        this.datosService.saveNewTableStage(param).then(res =>
        {            
            console.log(res.data);        
            var newNodo = {
                "label":res.state_err == "ok" ? res.data : res.message_err,
                "typeNodo":"table",
                "estado":res.state_err,
                "children":[]
            };
            debugger;
            this.activeNode.children.push(newNodo);
            $(this.mdStage.nativeElement).modal('hide');
           
        });      
    }     
}
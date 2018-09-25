import { Component,ViewEncapsulation,OnInit } from '@angular/core';
import { DatosService } from '@app-services/datos.service';
import { Router } from '@angular/router';
import { StateAppService } from '@app-services/state-app.service';

@Component({
    selector: 'etl-tree-sidebar',
    templateUrl: './tree-sidebar.component.html',
    encapsulation: ViewEncapsulation.None,  
})

export class TreeSideBarComponent
{   
    filesTree: any[];
    activeNode : any = {"children":[{"estado":""}]};
    selectedFile3: any;   
    mdFormStage:any; 
    mdStage:any;

    constructor(private datosService: DatosService
        ,private stateService:StateAppService
        ,private router:Router) 
    {

    }
    ngOnInit() {

        this.datosService.getEtlTree().then(res=>{
            this.filesTree = res;
        });
    }
  //cuando se selecciona un nodo del arbol
    nodeSelect(event)
    {     
            debugger;
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
        switch(event.node.typeNodo)
        {
            case 'dim':
            case 'fact':
            case 'dds':{
                this.router.navigate(['/dwhcore/etl/phase']);
                break;
            }
            case 'table':{
                this.router.navigate(['/dwhcore/etl/stage']);
                break;
            }
        }                        
    }

     //formulario de nueva tabla de stage
     newTableStage(){      
        this.mdFormStage.nombre_proceso_carga = this.activeNode.label;
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
            this.activeNode.children.push(newNodo);
            $(this.mdStage.nativeElement).modal('hide');
           
        });      
    }     
}
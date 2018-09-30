import { Component,ViewEncapsulation,OnInit } from '@angular/core';
//import { DOCUMENT } from '@angular/common';
import { DatosService } from '@app-services/datos.service';
import { Router } from '@angular/router';
import { StateAppService } from '@app-services/state-app.service';
import { ModalService } from '@app-services/modal.service';

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

    // ,@Inject(DOCUMENT) doc
    constructor(private datosService: DatosService
        ,private stateService:StateAppService
        ,private router:Router
        ,private modalService:ModalService) 
    {        
    }
    ngOnInit() 
    {

        this.datosService.getEtlTree().then(res=>{
            this.filesTree = res;
        });
        //nos subscribimos a este evento para recibir el restulado del modal
        this.modalService.returnModel.subscribe(res=>
        {
            this.activeNode.children.push(res);
        });
    }   
  //cuando se selecciona un nodo del arbol
    nodeSelect(event)
    {               
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
     //formulario de nueva tabla de stage, le pasamos el nombre del proceso que la carga
     showModal1()
     {                            
         var mod = {
             "nombre_proceso_carga":this.activeNode.label
         };                     
         this.modalService.showModal('modal1',mod);              
     }  
     ngOnDestroy()
     {                                
        this.modalService.returnModel.unsubscribe();
     }
}
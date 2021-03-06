import { Component,ViewEncapsulation,OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ScriptLoaderService } from '@app-services/script-loader.service';
import { DatosService } from '@app-services/datos.service';
import {EditorModule} from 'primeng/editor';
import {TreeNode} from 'primeng/api';
import { isProceduralRenderer } from '@angular/core/src/render3/interfaces/renderer';
import {MessageService} from 'primeng/primeng';
import { StateAppService } from '@app-services/state-app.service';
import { ModalComponent } from '@app-modules/shared/modal/modal.component';


declare function portletInitJS(id:any);

@Component({
    selector: 'app-etl #etl',
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

export class EtlComponent implements OnInit,AfterViewInit
{     
    selectedFile: TreeNode;
    filesTree: any[];
    textoEditor:string;
    nameStep:string;
    nameJob:string;
    typePhase:any[]=['dim','fact','dds'];
    inputModel:any;

    @ViewChild('modal1') modal1: ModalComponent;
    @ViewChild('modal2') modal2: ModalComponent;

    constructor(private _script: ScriptLoaderService,private datosService: DatosService
                ,private messageService: MessageService
                ,private satateService:StateAppService
                ,private router:Router) {   
        
        this.satateService.currentTreeNode.subscribe(message=>this.filesTree=message);
    }    

    ngOnInit(){        
        // this.datosService.getDataNode([{
        //     "label":"param_nombre_proceso",
        //     "value":"th_albaranes"
        // }]).then(res =>{
        //     this.filesTree = res;                        
        // });
        this.filesTree = [{typeNodo:''}];          
        debugger;
    }
    
    ngAfterViewInit(){
        // this._script.loadScripts('body', ['assets/demo/default/custom/components/portlets/tools.js']);
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
        this._script.loadScripts('body', ['assets/app/components/m3InitPortlet.js'],true);
        //this.portletIni();
    }    
    portletIni(){
        portletInitJS("m_portlet_tools_1");
        portletInitJS("m_portlet_tools_2");
    }
    onNodeSelect(event) {
        this.nameStep = event.node.label;
        this.textoEditor = event.node.sql;   
        this.nameJob = event.node.nameJob;                    
    }
    saveSql()
    {
        var param = [
            {
                label:"param_sql",
                value:this.textoEditor
            },
            {
                label:"param_label",
                value:this.nameStep
            },
            {
                label:"param_name_job",
                value:this.nameJob
            }
        ];        
        this.datosService.saveSql(param);
    }
    // showModal1()
    // {      
    //     this.inputModel = {
    //         "param_nombre_tabla":"nueva_tabla"
    //     };
    //     this.modal1.showModal(this.inputModel);
    // }
    // showModal2()
    // {      
    //     this.modal2.showModal();
    // }
    // getModelModal(event)
    // {
    //     console.log(event);
    //     debugger;
    // }
}
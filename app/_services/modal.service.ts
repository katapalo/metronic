import { Injectable, EventEmitter } from '@angular/core';
import { ModalComponent } from '@app-modules/shared/modal/modal.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DatosService } from '@app-services/datos.service';

class KeyValueModal {
    idModal:string;
    modal:ModalComponent;
    model:any;
};

@Injectable({
    providedIn:'root'
})
export class ModalService 
{      
    listModals:KeyValueModal[];
    
    returnModel: EventEmitter<Object> = new EventEmitter();
    constructor(private datosService:DatosService)
    {
    this.listModals = new Array<KeyValueModal>();     

    }

    //se llama desde el componente modal cuando se pulsa el boton de aceptar de este.
    setModel(idModal:string)
    {
        switch(idModal)
        {
            case 'modal1':
                this.setModel1();
                break;
        }
    }
    //Procesamiento del modal1
    setModel1()
    {
        var node = this.getNode('modal1');        
        var param = [
            {
                "label":"param_modelo",
                "value":JSON.stringify(node.modal.model)
            }
        ];          
        this.datosService.saveNewTableStage(param).then(res =>
        {                                        
            var newNodo = {
                "label":res.state_err == "ok" ? res.data : res.message_err,
                "typeNodo":"table",
                "estado":res.state_err,
                "children":[]
            };        
            this.returnModel.emit(newNodo);           
            node.modal.closeModal();            
        });
    }
                            
    showModal(idmodal:string,model:any)
    {        
        var node = this.getNode(idmodal);
        var modal = node.modal;
        modal.model = model;       
        modal.showModal();     
    }

    appendModal(md:ModalComponent)
    {
        var modal = new KeyValueModal();
        modal.idModal = md.typeModal;
        modal.modal = md;            
        this.listModals.push(modal);       
    }


    private getNode(idModal):KeyValueModal
    {
        var node = this.listModals.find(r=> r.idModal == idModal);
        return node;
    }

}
import { Component,ViewEncapsulation,Input,AfterViewInit,ViewChild
    , ElementRef} from '@angular/core';
import { DatosService } from '@app-services/datos.service';
import { ModalService } from '@app-services/modal.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    encapsulation: ViewEncapsulation.None,  
})

export class ModalComponent
{    
    model: any = {}; 
     
    @ViewChild('btnOpenModal') btnOpen: ElementRef;
    @ViewChild('btnCloseModal') btnClose: ElementRef;    
    @Input() typeModal:string; 
 
    constructor(private datosService: DatosService,private modalService:ModalService) 
    {                        
                    
    }  
    ngAfterViewInit()
    {                           
      this.modalService.appendModal(this);                         
    } 
    public showModal()
    {                 
        this.btnOpen.nativeElement.click();         
    }   
    public closeModal()
    {
        this.btnClose.nativeElement.click();
    }   
   
    //cuando pulsamos el boton de aceptar el modal : se llama al servicio para que recoga el modelo y actue segun el modal mostrado
    private sendModel()
    {
        this.modalService.setModel(this.typeModal);        
    }    
}
import { Component,ViewEncapsulation,Input,
    Inject, inject, AfterViewInit,ViewChild, ElementRef, 
    EventEmitter ,Output
} from '@angular/core';
import { EventListener } from '@angular/core/src/debug/debug_node';
//import { DOCUMENT } from '@angular/common';
//import { Button } from 'primeng/primeng';


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
    @Input() name:string; 
    @Output() getModel = new EventEmitter();
   //constructor(@Inject(DOCUMENT) document) 
   constructor() 
    {            
    }  
    ngAfterViewInit()
    {               
      // this.element = this.doc.getElementById('btnOpenModal');                       
    } 
    public showModal()
    {
        this.model = {};
       //this.element.click();      
       this.btnOpen.nativeElement.click();
       debugger;
    }    
    sendModel()
    {
        this.btnOpen.nativeElement.click();
        this.getModel.emit(this.model);
    }
}
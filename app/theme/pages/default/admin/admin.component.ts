import {Component, OnInit, ViewEncapsulation,AfterViewInit} from '@angular/core';
import { ScriptLoaderService } from '@app-services/script-loader.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
 encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {

  constructor(private _script: ScriptLoaderService) {
    debugger;
  } 

  ngOnInit() {
    console.log("inicio en admin component");
  }
 
}
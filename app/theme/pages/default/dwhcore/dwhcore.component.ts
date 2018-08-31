import {Component, OnInit, ViewEncapsulation,AfterViewInit} from '@angular/core';
import { ScriptLoaderService } from '@app-services/script-loader.service';

@Component({
  selector: 'app-dwhcore',
  templateUrl: './dwhcore.component.html',
 encapsulation: ViewEncapsulation.None,
})
export class DwhcoreComponent implements OnInit {

  constructor(private _script: ScriptLoaderService) {
    debugger;
  }

  ngOnInit() {
    console.log("inicio en dwhcore component");
  }
 
}
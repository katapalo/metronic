import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dwhcore',
  templateUrl: './dwhcore.component.html',
 // encapsulation: ViewEncapsulation.None,
})
export class DwhcoreComponent implements OnInit {

  constructor() {
    debugger;
  }

  ngOnInit() {
    console.log("inicio en dwhcore component");
  }
}
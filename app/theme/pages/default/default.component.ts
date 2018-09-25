import { Component, OnInit, ViewEncapsulation,AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { ScriptLoaderService } from '../../../_services/script-loader.service';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body",
    templateUrl: "./default.component.html",
    encapsulation: ViewEncapsulation.None,
    // styleUrls: [
    //      '../../../../../node_modules/primeng/resources/primeng.css',
    //     '../../../../../node_modules/primeng/resources/themes/nova-light/theme.css',
    //     '../../../../../node_modules/primeicons/primeicons.css'
    // ]
})
export class DefaultComponent implements OnInit {


    constructor(private _script: ScriptLoaderService) {
    }

    ngOnInit() {

    }
    ngAfterViewInit(){
        debugger;
        // this._script.loadScripts('head', ['assets/demo/default/custom/components/portlets/tools.js']);
        debugger;
      }
}
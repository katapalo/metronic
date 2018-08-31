import { Component, OnInit, ViewEncapsulation,AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '@app-services/script-loader.service';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body",
    templateUrl: "./defaultcore.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        '../../../../../../node_modules/primeng/resources/primeng.css',
        '../../../../../../node_modules/primeng/resources/themes/nova-light/theme.css',
        '../../../../../../node_modules/primeicons/primeicons.css'
    ]
})
export class DefaultcoreComponent implements OnInit,AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {
        // this._script.loadScripts('body', ['../../../../../../node_modules/quill/dist/quill.js'], true)
        //     .then(result => {
        //         Helpers.setLoading(false);
        //         // optional js to be loaded once
        //     });
    }
    ngAfterViewInit(){        
      }
}
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Helpers } from '../../../helpers';
import { ScriptLoaderService } from '../../../_services/script-loader.service';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body",
    templateUrl: "./default1.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        '../../../../../node_modules/primeng/resources/primeng.css',
        '../../../../../node_modules/primeng/resources/themes/nova-light/theme.css',
        '../../../../../node_modules/primeicons/primeicons.css'
    ]
})
export class Default1Component implements OnInit {


    constructor() {

    }
    ngOnInit() {

    }

}
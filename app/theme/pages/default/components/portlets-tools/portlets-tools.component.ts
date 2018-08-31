import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '@app-services/script-loader.service';


@Component({
selector: "app-portlets-tools",
templateUrl: "./portlets-tools.component.html",
encapsulation: ViewEncapsulation.None,
})
export class PortletsToolsComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {
}
ngAfterViewInit()  {
    debugger;
    this._script.loadScripts('head',
    ['assets/demo/default/custom/components/portlets/tools.js']);

}

}
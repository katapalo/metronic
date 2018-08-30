import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '@app-services/script-loader.service';


@Component({
selector: "app-widgets-bootstrap-markdown",
templateUrl: "",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsBootstrapMarkdownComponent1 implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-bootstrap-markdown',
['assets/demo/default/custom/components/forms/widgets/bootstrap-markdown.js']);
(<any>$('[data-provide="markdown"]')).markdown();
}

}
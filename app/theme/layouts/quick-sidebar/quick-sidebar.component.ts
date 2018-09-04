import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Helpers } from '../../../helpers';
import { DatosService } from '@app-services/datos.service';

import {TreeNode} from 'primeng/api';

@Component({
    selector: "app-quick-sidebar",
    templateUrl: "./quick-sidebar.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class QuickSidebarComponent implements OnInit {

    selectedFile3: TreeNode;
    filesTree: TreeNode[];


    constructor(private datosService: DatosService) {

    }
    ngOnInit() {

        this.datosService.getEtlTree().then(res=>{
            this.filesTree = res;
        });
    }

}
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
    filesTree1: TreeNode[];


    constructor(private datosService: DatosService) {

    }
    ngOnInit() {
        this.datosService.getDatosTree().then(files =>{
            this.filesTree1 = files;
        });
    }

}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {TreeNode} from 'primeng/primeng';

@Injectable({
    providedIn:'root'
})
export class StateAppService {

  private treeNode = new BehaviorSubject<TreeNode[]>(null);
  currentTreeNode = this.treeNode.asObservable();

  constructor() { }

  changeTreeNode(message: any) {
    this.treeNode.next(message);  ;
  }

}
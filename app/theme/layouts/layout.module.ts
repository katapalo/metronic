import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';

import { HeaderNavComponent } from './header-nav/header-nav.component';
import { DefaultComponent } from '../pages/default/default.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { FooterComponent } from './footer/footer.component';
import { QuickSidebarComponent } from './quick-sidebar/quick-sidebar.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HrefPreventDefaultDirective } from '../../_directives/href-prevent-default.directive';
import { UnwrapTagDirective } from '../../_directives/unwrap-tag.directive';
import { FormsModule }   from '@angular/forms';
import { TreeSideBarComponent } from './tree-sidebar/tree-sidebar.component';
import { SharedModule } from '@app-modules/shared/shared.module';

//primeng
import { TreeModule }  from 'primeng/primeng';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderNavComponent,
        DefaultComponent,
        AsideNavComponent,
        FooterComponent,
        QuickSidebarComponent,
        ScrollTopComponent,
        TooltipsComponent,
        HrefPreventDefaultDirective,
        UnwrapTagDirective,
        TreeSideBarComponent,                
    ],
    exports: [
        LayoutComponent,
        HeaderNavComponent,
        DefaultComponent,
        AsideNavComponent,
        FooterComponent,
        QuickSidebarComponent,
        ScrollTopComponent,
        TooltipsComponent,
        HrefPreventDefaultDirective,
    ],
    imports: [
        CommonModule,
        RouterModule,
        TreeModule,
        SharedModule,
        FormsModule            
    ],
    providers:[]
})
export class LayoutModule {
}
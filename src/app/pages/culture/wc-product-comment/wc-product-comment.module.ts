import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WcProductCommentRoutingModule } from './wc-product-comment-routing.module';
import { WcProductCommentComponent } from './wc-product-comment.component'
import { WcComListComponent } from './wc-com-list/wc-com-list.component';
import { WcComBtnComponent } from './wc-com-btn/wc-com-btn.component';


import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { SharedModule } 			from '../../../shared/shared-Module/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    WcProductCommentRoutingModule,
    SharedModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [WcProductCommentComponent,WcComListComponent, WcComBtnComponent]
})
export class WcProductCommentModule { }

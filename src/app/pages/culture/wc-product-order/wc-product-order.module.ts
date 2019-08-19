import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WcProductOrderComponent } from './wc-product-order.component'
import { WcProductOrderRoutingModule } from './wc-product-order-routing.module';
import { WcOrderListComponent } from './wc-order-list/wc-order-list.component';
import { WcOrderBtnComponent } from './wc-order-btn/wc-order-btn.component';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { SharedModule } 			from '../../../shared/shared-Module/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    WcProductOrderRoutingModule,
    NgZorroAntdModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [WcProductOrderComponent,WcOrderListComponent, WcOrderBtnComponent]
})
export class WcProductOrderModule { }

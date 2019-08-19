import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WcMaterialOrderRoutingModule } from './wc-material-order-routing.module';
import { WcOrderListComponent } from './wc-order-list/wc-order-list.component';
import { WcOrderBtnComponent } from './wc-order-btn/wc-order-btn.component';
import { WcMaterialOrderComponent } from './wc-material-order.component'

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { SharedModule } 			from '../../../shared/shared-Module/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    WcMaterialOrderRoutingModule,
    NgZorroAntdModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [WcOrderListComponent, WcOrderBtnComponent,WcMaterialOrderComponent]
})
export class WcMaterialOrderModule { }

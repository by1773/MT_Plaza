import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WcProductSaleRoutingModule } from './wc-product-sale-routing.module';
import { WcProductSaleComponent } from './wc-product-sale.component'
import { WcSaleListComponent } from './wc-sale-list/wc-sale-list.component';
import { WcSaleBtnComponent } from './wc-sale-btn/wc-sale-btn.component';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { SharedModule } 			from '../../../shared/shared-Module/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    WcProductSaleRoutingModule,
     NgZorroAntdModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [WcProductSaleComponent,WcSaleListComponent, WcSaleBtnComponent]
})
export class WcProductSaleModule { }

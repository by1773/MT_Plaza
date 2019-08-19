import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WcProductTypeRoutingModule } from './wc-product-type-routing.module';
import { WcPrListComponent } from './wc-pr-list/wc-pr-list.component';
import { WcPrBtnComponent } from './wc-pr-btn/wc-pr-btn.component';
import { WcProductTypeComponent } from './wc-product-type.component';
import { LeftTypeListComponent } from './left-type-list/left-type-list.component'

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { SharedModule } 			from '../../../shared/shared-Module/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    WcProductTypeRoutingModule,
    NgZorroAntdModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [WcProductTypeComponent,WcPrListComponent, WcPrBtnComponent, LeftTypeListComponent]
})
export class WcProductTypeModule { }

import { NgModule } 												from '@angular/core';
import { CommonModule } 										from '@angular/common';

import { WcCrowdfundingOrderRoutingModule } from './wc-crowdfunding-order-routing.module';
import { WcCrowdfundingOrderComponent } 		from './wc-crowdfunding-order.component'
import { WcCroOrderListComponent } 					from './wc-cro-order-list/wc-cro-order-list.component';
import { WcCroOrderBtnComponent } 					from './wc-cro-order-btn/wc-cro-order-btn.component';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { SharedModule } 			from '../../../shared/shared-Module/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    WcCrowdfundingOrderRoutingModule,
    SharedModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [WcCrowdfundingOrderComponent,WcCroOrderListComponent, WcCroOrderBtnComponent]
})
export class WcCrowdfundingOrderModule { }

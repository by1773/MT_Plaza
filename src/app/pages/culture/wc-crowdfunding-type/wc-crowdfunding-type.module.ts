import { NgModule } 												from '@angular/core';
import { CommonModule } 										from '@angular/common';

import { WcCrowdfundingTypeRoutingModule } 	from './wc-crowdfunding-type-routing.module';
import { WcCrowdfundingTypeComponent } 			from './wc-crowdfunding-type.component'
import { WcCroTypeListComponent } 					from './wc-cro-type-list/wc-cro-type-list.component';
import { WcCroTypeBtnComponent } 						from './wc-cro-type-btn/wc-cro-type-btn.component';
import { LeftTypeListComponent } from './left-type-list/left-type-list.component';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { SharedModule } 			from '../../../shared/shared-Module/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    WcCrowdfundingTypeRoutingModule,
    NgZorroAntdModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [WcCrowdfundingTypeComponent, WcCroTypeListComponent, WcCroTypeBtnComponent, LeftTypeListComponent]
})
export class WcCrowdfundingTypeModule { }

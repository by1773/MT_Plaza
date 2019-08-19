import { NgModule } 										from '@angular/core';
import { CommonModule } 								from '@angular/common';

import { WcCrowdfundingRoutingModule } 	from './wc-crowdfunding-routing.module';
import { WcCrowdfundingComponent }  		from './wc-crowdfunding.component'
import { WcCroListComponent }						from './wc-cro-list/wc-cro-list.component';
import { WcCroBtnComponent } 						from './wc-cro-btn/wc-cro-btn.component';


import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { SharedModule } 			from '../../../shared/shared-Module/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    WcCrowdfundingRoutingModule,
    SharedModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [WcCrowdfundingComponent,WcCroListComponent, WcCroBtnComponent]
})
export class WcCrowdfundingModule { }

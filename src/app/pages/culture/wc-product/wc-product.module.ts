import { NgModule } 							from '@angular/core';
import { CommonModule } 					from '@angular/common';

import { WcProductRoutingModule } from './wc-product-routing.module';
import { WcProductComponent }  		from './wc-product.component'
import { WcPrListComponent } 			from './wc-pr-list/wc-pr-list.component';
import { WcPrBtnComponent } 			from './wc-pr-btn/wc-pr-btn.component';

import { NgZorroAntdModule, 
				 NZ_I18N, zh_CN } 		    from 'ng-zorro-antd';
import { SharedModule } 					from '../../../shared/shared-Module/shared.module'
import { FormsModule, 
				 ReactiveFormsModule } 		from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    WcProductRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [WcProductComponent,WcPrListComponent, WcPrBtnComponent]
})
export class WcProductModule { }

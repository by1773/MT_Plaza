import { NgModule } 										from '@angular/core';
import { CommonModule } 								from '@angular/common';
import { SharedModule } 								from '../../shared/shared-Module/shared.module'
import { CultureRoutingModule } 				from './culture-routing.module';
import { CultureComponent } 						from './culture.component';

// 文创产品管理
// import { WcMaterialLibComponent }       from './wc-material-lib/wc-material-lib.component';

// import { WcMaterialOrderComponent }     from './wc-material-order/wc-material-order.component';
// import { WcProductTypeComponent }       from './wc-product-type/wc-product-type.component';
// import { WcProductComponent }           from './wc-product/wc-product.component';
// import { WcProductOrderComponent }      from './wc-product-order/wc-product-order.component';
// import { WcProductSaleComponent }       from './wc-product-sale/wc-product-sale.component';
// import { WcProductCommentComponent }    from './wc-product-comment/wc-product-comment.component';
// import { WcCrowdfundingTypeComponent }  from './wc-crowdfunding-type/wc-crowdfunding-type.component';
// import { WcCrowdfundingComponent }      from './wc-crowdfunding/wc-crowdfunding.component';
// import { WcCrowdfundingOrderComponent } from './wc-crowdfunding-order/wc-crowdfunding-order.component';
@NgModule({
  imports: [
    CommonModule,
    CultureRoutingModule,
    SharedModule
  ],
  declarations: [
  	CultureComponent,
  	 // 文创产品
    // WcMaterialLibComponent,
    // WcMaterialOrderComponent,
    // WcProductTypeComponent,
    // WcProductComponent,
    // WcProductOrderComponent,
    // WcProductSaleComponent,
    // WcProductCommentComponent,
    // WcCrowdfundingTypeComponent,
    // WcCrowdfundingComponent,
    // WcCrowdfundingOrderComponent,
  	]
})
export class CultureModule { }

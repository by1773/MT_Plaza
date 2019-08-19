import { NgModule } 												from '@angular/core';
import { Routes, RouterModule } 						from '@angular/router';
import { WcCrowdfundingOrderComponent } 		from './wc-crowdfunding-order.component'
import { WcCroOrderListComponent } 					from './wc-cro-order-list/wc-cro-order-list.component';
const routes: Routes = [{
	path:'',
	component:WcCrowdfundingOrderComponent,
	children:[{
		path:'list',
		component:WcCroOrderListComponent,
		data: { title: '文创众筹订单',module: 'culture/wcCrO/list',power:'SHOW'}
	}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcCrowdfundingOrderRoutingModule { }

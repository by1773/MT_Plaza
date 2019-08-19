import { NgModule } 								from '@angular/core';
import { Routes, RouterModule } 		from '@angular/router';
import { WcProductOrderComponent } 	from './wc-product-order.component'
import { WcOrderListComponent } 		from './wc-order-list/wc-order-list.component';
const routes: Routes = [{
	path:'',
	component:WcProductOrderComponent,
	children:[{
		path:'list',
		component:WcOrderListComponent,
		data: { title: '文创产品订单',module: 'culture/wcPrO/list',power:'SHOW'}
	}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcProductOrderRoutingModule { }

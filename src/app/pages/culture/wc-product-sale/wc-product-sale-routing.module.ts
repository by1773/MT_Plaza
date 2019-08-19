import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WcProductSaleComponent } from './wc-product-sale.component'
import { WcSaleListComponent } from './wc-sale-list/wc-sale-list.component';
const routes: Routes = [{
	path:'',
	component:WcProductSaleComponent,
	children:[{
		path:'list',
		component:WcSaleListComponent,
		data: { title: '文创产品售后申请管理',module: 'culture/wcPrS/list',power:'SHOW'}
	}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcProductSaleRoutingModule { }

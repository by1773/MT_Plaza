import { NgModule } 								from '@angular/core';
import { Routes, RouterModule } 		from '@angular/router';
import { WcMaterialOrderComponent } from './wc-material-order.component'
import { WcOrderListComponent } 		from './wc-order-list/wc-order-list.component';
const routes: Routes = [{
	path:'',
	component:WcMaterialOrderComponent,
	children:[{
		path:'list',
		component:WcOrderListComponent,
		data: { title: '素材订单管理',module: 'culture/wcMaO/list',power:'SHOW'}
	}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcMaterialOrderRoutingModule { }

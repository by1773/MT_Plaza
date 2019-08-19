import { NgModule } 							from '@angular/core';
import { Routes, RouterModule } 	from '@angular/router';
import { WcProductTypeComponent } from './wc-product-type.component';
import { WcPrListComponent } 			from './wc-pr-list/wc-pr-list.component';
const routes: Routes = [{
	path:'',
	component:WcProductTypeComponent,
	children:[{
		path:'list',
		component:WcPrListComponent,
		data: { title: '文创产品类型管理',module: 'culture/wcPrT/list',power:'SHOW'}
	}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcProductTypeRoutingModule { }

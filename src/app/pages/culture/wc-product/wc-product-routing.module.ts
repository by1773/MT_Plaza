import { NgModule } 							from '@angular/core';
import { Routes, RouterModule } 	from '@angular/router';
import { WcProductComponent }  		from './wc-product.component'
import { WcPrListComponent } 			from './wc-pr-list/wc-pr-list.component';
const routes: Routes = [{
	path:'',
	component:WcProductComponent,
	children:[{
		path:'list',
		component:WcPrListComponent,
		data: { title: '文创产品管理',module: 'culture/wcPr/list',power:'SHOW'} 
	}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcProductRoutingModule { }

import { NgModule } 									from '@angular/core';
import { Routes, RouterModule } 			from '@angular/router';
import { WcProductCommentComponent } 	from './wc-product-comment.component'
import { WcComListComponent } 				from './wc-com-list/wc-com-list.component';
const routes: Routes = [{
	path:'',
	component:WcProductCommentComponent,
	children:[{
		path:'list',
		component:WcComListComponent,
		data: { title: '文创产品评价',module: 'culture/wcPrC/list',power:'SHOW'}
	}]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcProductCommentRoutingModule { }

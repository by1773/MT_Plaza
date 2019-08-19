import { NgModule } 										from '@angular/core';
import { Routes, RouterModule } 				from '@angular/router';
import { WcCrowdfundingComponent }  		from './wc-crowdfunding.component'
import { WcCroListComponent }						from './wc-cro-list/wc-cro-list.component';
const routes: Routes = [{
	path:'',
	component:WcCrowdfundingComponent,
	children:[{
		path:'list',
		component:WcCroListComponent,
		data: { title: '文创众筹管理',module: 'culture/wcCrF/list',power:'SHOW'}
	}]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcCrowdfundingRoutingModule { }

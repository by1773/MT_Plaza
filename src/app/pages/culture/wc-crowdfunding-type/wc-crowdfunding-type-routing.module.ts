import { NgModule } 												from '@angular/core';
import { Routes, RouterModule } 						from '@angular/router';
import { WcCrowdfundingTypeComponent } 			from './wc-crowdfunding-type.component'
import { WcCroTypeListComponent } 					from './wc-cro-type-list/wc-cro-type-list.component';
const routes: Routes = [{
	path:'',
	component:WcCrowdfundingTypeComponent,
	children:[{
		path:'list',
		component:WcCroTypeListComponent,
		data: { title: '文创众筹类型管理',module: 'culture/wcCrT/list',power:'SHOW'}
	}]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcCrowdfundingTypeRoutingModule { }

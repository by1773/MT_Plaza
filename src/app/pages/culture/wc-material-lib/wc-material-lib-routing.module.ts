import { NgModule } 									from '@angular/core';
import { Routes, RouterModule } 			from '@angular/router';
import { WcMaterialLibComponent }			from './wc-material-lib.component'
import { WcLibListComponent } 				from './wc-lib-list/wc-lib-list.component';
const routes: Routes = [{
	path:'',
	component:WcMaterialLibComponent,
	children:[{
		path:'list',
		component:WcLibListComponent,
		data: { title: '素材库管理',module: 'culture/wcMaL/list',power:'SHOW'} 
	}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcMaterialLibRoutingModule { }

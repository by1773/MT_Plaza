import { NgModule } 										from '@angular/core';
import { Routes, RouterModule } 				from '@angular/router';
import { WcMaterialTypeComponent }      from './wc-material-type.component';
import { WcTypeListComponent } 					from './wc-type-list/wc-type-list.component';
const routes: Routes = [{
	path:'',
	component:WcMaterialTypeComponent,
	children:[{
		path:'list',
		component:WcTypeListComponent,
		data: { title: '素材类型管理',module: 'culture/wcMaT/list',power:'SHOW'}
	}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcMaterialTypeRoutingModule { }

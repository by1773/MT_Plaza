import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// 综合信息管理
import { BusinessComponent }          from './business.component';
import { FxAllInfoComponent }       	from './fx-all-info/fx-all-info.component';
import { FxProTypeComponent }       	from './fx-pro-type/fx-pro-type.component'; 
import { InfoViewComponent }          from './fx-all-info/info-view/info-view.component';
import { InfoEditComponent }          from './fx-all-info/info-edit/info-edit.component';
import { TypeEditComponent }          from './fx-pro-type/type-edit/type-edit.component';
const routes: Routes = [

		{
			path:'',
			component:BusinessComponent,
			children:[
				{ path: 'fxAllInfo', component: FxAllInfoComponent, data: { title: '综合信息管理',module: 'business/fxAllInfo',power:'SHOW'} },
				{ path: 'fxAllInfo/view', component: InfoViewComponent, data: { title: '综合信息详情',module: 'business/fxAllInfo/view',power:'SHOW'} },
				{ path: 'fxAllInfo/edit', component: InfoEditComponent, data: { title: '综合信息修改',module: 'business/fxAllInfo/edit',power:'SHOW'} },
				{ path: 'fxProType', component: FxProTypeComponent, data: { title: '产品类型管理',module: 'business/fxProType',power:'SHOW'} },
				{ path: 'fxProType/edit', component: TypeEditComponent, data: { title: '产品类型修改',module: 'business/fxProType/edit',power:'SHOW'} },
			]
		}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// 资讯管理
import { NewComponent }             from './new/new.component';
import { NewTypeComponent }         from './new-type/new-type.component';
import { NewHotComponent }          from './new-hot/new-hot.component';
import { NewsAddComponent }         from './news-add/news-add.component';
import { NewsComponent }            from './news.component';
import { AddTypeComponent }         from './new-type/add-type/add-type.component';
import { ViewTypeComponent }        from './new-type/view-type/view-type.component';
import { ModifyTypeComponent }      from './new-type/modify-type/modify-type.component';
import { CanLeaveProvide } 					from './news-add/can-leave.provide';
const routes: Routes = [
	 	// 资讯管理
	 	{
	 		path:'',
	 		component:NewsComponent,
	 		children:[
		    { path: 'newsType', component: NewTypeComponent, data: { title: '咨讯类型管理',module: 'news/newsType',power:'SHOW'} },
		    { path: 'newsType/addType', component: AddTypeComponent, data: { title: '新增资讯类型',module: 'news/newsType/addType',power:'SHOW'} },
		    { path: 'newsType/viewType', component: ViewTypeComponent, data: { title: '资讯类型详情',module: 'news/newsType/viewType',power:'SHOW'} },
		    { path: 'newsType/modifyType', component: ModifyTypeComponent, data: { title: '编辑资讯类型',module: 'news/newsType/modifyType',power:'SHOW'} },
		    { path: 'new', component: NewComponent, data: { title: '咨讯管理',module: 'news/new',power:'SHOW'} },
		    { path: 'newsHot', component: NewHotComponent, data: { title: '资讯热点',module: 'news/newsHot',power:'SHOW'} },
		    { path: 'newsAdd', component: NewsAddComponent, canDeactivate: [CanLeaveProvide],data: { title: '新增咨讯',module: 'news/newsAdd',power:'SHOW'} },
    	]
	 	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }

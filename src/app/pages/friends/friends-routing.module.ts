import { NgModule } 									from '@angular/core';
import { Routes, RouterModule } 			from '@angular/router';
import { FrDynamicComponent }         from './fr-dynamic/fr-dynamic.component';
import { FrDynamicReplyComponent }    from './fr-dynamic-reply/fr-dynamic-reply.component';
import { FriendsComponent }           from './friends.component';
import { DyViewComponent }            from './fr-dynamic/dy-view/dy-view.component';
import { DyReViewComponent }          from './fr-dynamic-reply/dy-re-view/dy-re-view.component';
const routes: Routes = [
		{
			path:'',
			component:FriendsComponent,
			children:[
				{ path: 'FrDynamic', component: FrDynamicComponent, data: { title: '动态管理',module: 'friends/FrDynamic',power:'SHOW'} },
				{ path: 'FrDynamic/view', component: DyViewComponent, data: { title: '动态详情',module: 'friends/FrDynamic/view',power:'SHOW'} },
				{ path: 'FrDynReply', component: FrDynamicReplyComponent, data: { title: '动态评论回复管理',module: 'friends/FrDynReply',power:'SHOW'} },
				{ path: 'FrDynReply/view', component: DyReViewComponent, data: { title: '动态评论回复详情',module: 'friends/FrDynReply/view',power:'SHOW'} }
			]
		}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendsRoutingModule { }

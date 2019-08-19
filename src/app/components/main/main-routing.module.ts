import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';
import { CommonModule }            from '@angular/common';
import { MainComponent }           from './main.component';

// 首页
import { HomeComponent }           from '../../pages/home/home.component';
import { LoginGuard }              from '../../shared/service/login-guard/login-guard.service'
import { UserComponent }           from '../../pages/system/user/user.component';
import { RoleComponent }           from '../../pages/system/role/role.component';
import { AreaComponent }           from '../../pages/system/area/area.component';
import { ResourceComponent }       from '../../pages/system/resource/resource.component';
const routes: Routes = [
    {
         path:'',
         component:MainComponent,
         canActivate:[LoginGuard],
         children:[
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent, data: { title: '首页',module: 'home',power:'SHOW'} },

        { path: 'sysUser', component: UserComponent, data: { title: '用户管理',module: 'sysUser',power:'SHOW'} },
        { path: 'sysRole', component: RoleComponent, data: { title: '动态评论回复管理',module: 'sysRole',power:'SHOW'} },
        { path: 'sysArea', component: AreaComponent, data: { title: '区域管理',module: 'sysArea',power:'SHOW'} },
        { path: 'sysResource', component: ResourceComponent, data: { title: '资源管理',module: 'sysResource',power:'SHOW'} },

        { path:'member', loadChildren:'../../pages/member/member.module#MemberModule'},
        { path:'news',   loadChildren:'../../pages/news/news.module#NewsModule'},
        { path:'capital',loadChildren:'../../pages/capital/capital.module#CapitalModule'},
        { path:'business',loadChildren:'../../pages/business/business.module#BusinessModule'},
        { path:'friends',loadChildren:'../../pages/friends/friends.module#FriendsModule'},
        { path:'culture',loadChildren:'../../pages/culture/culture.module#CultureModule'},
             ]
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

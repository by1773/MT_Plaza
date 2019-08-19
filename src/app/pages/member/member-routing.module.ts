import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//资讯管理
import { MemberListComponent }      from './member-list/member-list.component';
import { CoinApplyComponent }       from './coin-apply/coin-apply.component';
import { CoinGiveComponent }        from './coin-give/coin-give.component';
import { ListViewComponent }        from './member-list/list-view/list-view.component'
import { MemberComponent }          from './member.component'
import { GiveCoinComponent }        from './member-list/give-coin/give-coin.component'
import { ApplyViewComponent }       from './coin-apply/apply-view/apply-view.component'
import { CoinViewComponent }        from './coin-give/coin-view/coin-view.component'
const routes: Routes = [
    { path:'',
      component:MemberComponent,
      children:[
          { path: 'memberList', component: MemberListComponent, data: { title: '会员列表',module: 'member/memberList',power:'SHOW'}},
        	{ path: 'memberList/view', component: ListViewComponent, data: { title: '会员详情',module: 'member/memberList/view',power:'SHOW'}},
          { path: 'memberList/giveCoin', component: GiveCoinComponent, data: { title: '赠送说酒币',module: 'member/memberList/giveCoin',power:'SHOW'}},
          { path: 'coinApply', component: CoinApplyComponent, data: { title: '说酒币申请记录',module: 'member/coinApply',power:'SHOW'} },
          { path: 'coinApply/view', component: ApplyViewComponent, data: { title: '说酒币申请详情',module: 'member/coinApply/view',power:'SHOW'} },
          { path: 'coinGive', component: CoinGiveComponent, data: { title: '说酒币赠送记录',module: 'member/coinGive',power:'SHOW'}},
          { path: 'coinGive/view', component: CoinViewComponent, data: { title: '说酒币赠送详情',module: 'member/coinGive/view',power:'SHOW'}},
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }

import { NgModule } 								from '@angular/core';
import { CommonModule } 						from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } 		from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } 		from '@angular/forms';
import { MemberRoutingModule } 			from './member-routing.module';
import { MemberListComponent }      from './member-list/member-list.component';
import { CoinApplyComponent }       from './coin-apply/coin-apply.component';
import { CoinGiveComponent }        from './coin-give/coin-give.component';
import { MemberBtnComponent }      	from './member-btn/member-btn.component';
import { SharedModule }  						from '../../shared/shared-Module/shared.module';
import { ListViewComponent }        from './member-list/list-view/list-view.component';
import { MemberComponent }          from './member.component';
import { GiveCoinComponent }        from './member-list/give-coin/give-coin.component';
import { ApplyViewComponent }       from './coin-apply/apply-view/apply-view.component';
import { CoinViewComponent }        from './coin-give/coin-view/coin-view.component'
@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
    SharedModule,
    NgZorroAntdModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
  	MemberListComponent,
  	CoinApplyComponent,
  	CoinGiveComponent,
  	MemberBtnComponent,
  	ListViewComponent,
  	MemberComponent,
  	GiveCoinComponent,
  	ApplyViewComponent,
  	CoinViewComponent
  ]
})
export class MemberModule { }

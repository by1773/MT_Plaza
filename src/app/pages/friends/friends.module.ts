import { NgModule } 									from '@angular/core';
import { CommonModule } 							from '@angular/common';
import { SharedModule }  							from '../../shared/shared-Module/shared.module';
import { FriendsRoutingModule } 			from './friends-routing.module';
import { FrDynamicComponent }         from './fr-dynamic/fr-dynamic.component';
import { FrDynamicReplyComponent }    from './fr-dynamic-reply/fr-dynamic-reply.component';
import { FrBtnComponent }          		from './fr-btn/fr-btn.component';
import { FriendsComponent }           from './friends.component';
import { DyViewComponent }            from './fr-dynamic/dy-view/dy-view.component';
import { DyReViewComponent }          from './fr-dynamic-reply/dy-re-view/dy-re-view.component';
import { NgZorroAntdModule, 
         NZ_I18N, zh_CN }             from 'ng-zorro-antd';
import { FormsModule, 
         ReactiveFormsModule }        from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FriendsRoutingModule,
    SharedModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
  	FrDynamicComponent,
    FrDynamicReplyComponent,
    FrBtnComponent,
    FriendsComponent,
    DyViewComponent,
    DyReViewComponent,
    ]
})
export class FriendsModule { }

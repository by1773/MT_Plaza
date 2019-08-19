import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';

import { CapitalRoutingModule }       from './capital-routing.module';
import { SharedModule }  						  from '../../shared/shared-Module/shared.module';
// 资金管理
import { TraFlowingComponent }        from './tra-flowing/tra-flowing.component';
import { TraBtnComponent }            from './tra-btn/tra-btn.component';
import { CapitalComponent }           from './capital.component';

import { NgZorroAntdModule, 
         NZ_I18N, zh_CN }             from 'ng-zorro-antd';
import { FormsModule, 
         ReactiveFormsModule }        from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    CapitalRoutingModule,
    SharedModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TraFlowingComponent,
    TraBtnComponent,
    CapitalComponent
  ]
})
export class CapitalModule { }

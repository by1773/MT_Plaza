import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';

import { BusinessRoutingModule }      from './business-routing.module';
import { SharedModule }  						  from '../../shared/shared-Module/shared.module';
// 发现市场信息管理
import { FxAllInfoComponent }         from './fx-all-info/fx-all-info.component';
import { FxProTypeComponent }         from './fx-pro-type/fx-pro-type.component';
import { FxBtnComponent }             from './fx-btn/fx-btn.component';
import { InfoViewComponent }          from './fx-all-info/info-view/info-view.component';
import { InfoEditComponent }          from './fx-all-info/info-edit/info-edit.component';
import { TypeEditComponent }          from './fx-pro-type/type-edit/type-edit.component';
import { BusinessComponent }          from './business.component';
import { NgZorroAntdModule, 
         NZ_I18N, zh_CN }             from 'ng-zorro-antd';
import { FormsModule, 
         ReactiveFormsModule }        from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    BusinessRoutingModule,
    SharedModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [
   	FxAllInfoComponent,
	  FxProTypeComponent,
	  InfoViewComponent,
	  InfoEditComponent,
	  TypeEditComponent,
	  BusinessComponent,
	  FxBtnComponent,
  ]
})
export class BusinessModule { }

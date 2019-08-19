import { NgModule } 									from '@angular/core';
import { CommonModule } 							from '@angular/common';

import { WcMaterialLibRoutingModule } from './wc-material-lib-routing.module';
import { WcLibListComponent } 				from './wc-lib-list/wc-lib-list.component';
import { WcLibBtnComponent } 					from './wc-lib-btn/wc-lib-btn.component';
import { WcMaterialLibComponent }			from './wc-material-lib.component'

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { SharedModule } 			from '../../../shared/shared-Module/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
  	SharedModule,
    CommonModule,
    NgZorroAntdModule,
    WcMaterialLibRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [WcLibListComponent, WcLibBtnComponent,WcMaterialLibComponent]
})
export class WcMaterialLibModule { }

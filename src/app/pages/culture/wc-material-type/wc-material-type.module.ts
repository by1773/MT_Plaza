import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WcMaterialTypeRoutingModule } from './wc-material-type-routing.module';
import { WcTypeBtnComponent } from './wc-type-btn/wc-type-btn.component';
import { WcTypeListComponent } from './wc-type-list/wc-type-list.component';
import { WcMaterialTypeComponent } from './wc-material-type.component';
import { LeftTypeListComponent } from './left-type-list/left-type-list.component'
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { SharedModule } 			from '../../../shared/shared-Module/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    WcMaterialTypeRoutingModule,
    NgZorroAntdModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [WcMaterialTypeComponent,WcTypeBtnComponent, WcTypeListComponent, LeftTypeListComponent]
})
export class WcMaterialTypeModule { }

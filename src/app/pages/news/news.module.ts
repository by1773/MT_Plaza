import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';

import { NgZorroAntdModule, 
         NZ_I18N, zh_CN }           from 'ng-zorro-antd';
import { NewsRoutingModule }        from './news-routing.module';
import { 
         FormsModule, 
         ReactiveFormsModule }      from '@angular/forms';
import { SharedModule }  						from '../../shared/shared-Module/shared.module';
// 资讯管理
import { UEditorModule }            from 'ngx-ueditor';
import { NewComponent }             from './new/new.component';
import { NewTypeComponent }         from './new-type/new-type.component';
import { NewHotComponent }          from './new-hot/new-hot.component';
import { NewsAddComponent }         from './news-add/news-add.component';
import { NewsBtnComponent }        	from './news-btn/news-btn.component';

import { NewsComponent }            from './news.component';
import { AddTypeComponent }         from './new-type/add-type/add-type.component';
import { ViewTypeComponent }        from './new-type/view-type/view-type.component';
import { ModifyTypeComponent }      from './new-type/modify-type/modify-type.component';
import { NewTableComponent }        from './new/new-table/new-table.component';
import {CanLeaveProvide }           from './news-add/can-leave.provide'

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    NgZorroAntdModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
	  UEditorModule.forRoot({
	    js: [
	      `./assets/ueditor/ueditor.all.min.js`,
	      `./assets/ueditor/ueditor.config.js`,
	    ],
	    // 默认前端配置项
	    options: {
	      UEDITOR_HOME_URL: './assets/ueditor/'
	    }
	    })

  ],
  declarations: [
  	NewComponent,
  	NewTypeComponent,
  	NewHotComponent,
  	NewsAddComponent,
  	NewsBtnComponent,
    NewsComponent,
    AddTypeComponent,
    ViewTypeComponent,
    ModifyTypeComponent,
    NewTableComponent   
  	],
    providers: [CanLeaveProvide]
})
export class NewsModule { }

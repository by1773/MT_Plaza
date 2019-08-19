//router
import { LocalStorageService } from '../service/storage/local-storage.service';
import { AgmCoreModule } from '@agm/core';
import { RouteReuseStrategy } from '@angular/router'; 
import { SimpleReuseStrategy } from '../../SimpleReuseStrategy';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

// Core Module
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  Title }    from '@angular/platform-browser';//BrowserModule,
import { CommonModule } from '@angular/common';
import { NgbModule }   from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule }    from '@angular/core';
import { PaginationComponent } from '../../pages/common/pagination/pagination.component';
// Main Component

import { UEditorModule } from 'ngx-ueditor';
// Component Module
import { NvD3Module }           from 'ng2-nvd3';
import { NgSlimScrollModule }   from 'ngx-slimscroll';
import { CalendarModule }       from 'angular-calendar';
import { FullCalendarModule }   from 'ng-fullcalendar';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgxChartsModule }      from '@swimlane/ngx-charts';
import { NgxDatatableModule }   from '@swimlane/ngx-datatable';
import { TrendModule }          from 'ngx-trend';
import { HighlightJsModule }    from 'ngx-highlight-js'
import { CountdownModule }      from 'ngx-countdown';
import { ChartsModule }         from 'ng4-charts/ng4-charts';


import { PageToolComponent }       from '../../pages/common/page-tool/page-tool.component';
// 登录状态路由守卫
import { LoginGuard }              from '../service/login-guard/login-guard.service'
import { CropperComponent }         from '../../pages/common/cropper/cropper.component';
import { TableComponent }          from '../../pages/common/table/table.component';
// import { TabMoveDirective }        from '../directive/tab-move.directive'
// 会员管理
// import { MemberListComponent }     from '../pages/member/member-list/member-list.component';
// import { MemberBtnComponent }      from '../../pages/member/member-btn/member-btn.component';
// 资讯管理
// import { NewsBtnComponent }        from '../../pages/news/news-btn/news-btn.component';
// 发现市场信息管理
// import { FxBtnComponent }             from '../../pages/business/fx-btn/fx-btn.component';
// 资金管理
// import { TraBtnComponent }            from '../../pages/capital/tra-btn/tra-btn.component';

//矛友圈管理
// import { FrBtnComponent }          from '../../pages/friends/fr-btn/fr-btn.component';
// 系统管理
// import { SysBtnComponent }         from '../../pages/system/sys-btn/sys-btn.component';

import { TableSelectedDirective } from '../directive/table-selected.directive';

import * as GLOBAL                from '../../globals';

@NgModule({
  declarations: [
    // TabMoveDirective,
    CropperComponent,
    TableComponent,
    PaginationComponent,
    // MemberListComponent,
    
    
    // member
    // MemberBtnComponent,
    
    // FxBtnComponent,
    // 资金管理
    
    // TraBtnComponent,
    // 矛友圈管理
    // FrBtnComponent,
    // 系统管理
    // SysBtnComponent,
    PageToolComponent,
    TableSelectedDirective
    ],
   exports: [
    CommonModule,
    TableComponent,
    PaginationComponent,
    PageToolComponent,
    CropperComponent,
    TableSelectedDirective,
    // TabMoveDirective,
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule.forRoot(),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyC5gJ5x8Yw7qP_DqvNq3IdZi2WUSiDjskk' }),
    // BrowserAnimationsModule,
    // BrowserModule,
    CalendarModule.forRoot(),
    CountdownModule,
    ChartsModule,
    FullCalendarModule,
    FormsModule,
    HighlightJsModule,
    NgbModule.forRoot(),
    NgxChartsModule,
    NgSlimScrollModule,
    NvD3Module,
    ReactiveFormsModule,
    SlimLoadingBarModule.forRoot(),
    TrendModule,
    NgxDatatableModule,
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
  providers: [ 
      Title, 
      { provide: RouteReuseStrategy, useClass: SimpleReuseStrategy },
      LocalStorageService,
      LoginGuard
      ],
      bootstrap: [ ]
})

export class SharedModule {
  // constructor(private router: Router, private titleService: Title, private route: ActivatedRoute) {
  //   router.events.subscribe((e) => {
  //     if (e instanceof NavigationEnd) {
  //       var title = '管理系统 | ' + this.route.snapshot.firstChild.data['title'];
  //       this.titleService.setTitle(title);
  //     }
  //   });
  // }
}


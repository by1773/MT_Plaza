//router
import { LocalStorageService }    from '../../shared/service/storage/local-storage.service';
import { AgmCoreModule }          from '@agm/core';
import { RouteReuseStrategy }     from '@angular/router'; 
import { SimpleReuseStrategy }    from '../../SimpleReuseStrategy';
import { NgZorroAntdModule, NZ_I18N, zh_CN }         from 'ng-zorro-antd';
/** 配置 angular i18n **/
import { registerLocaleData }     from '@angular/common';
import zh                         from '@angular/common/locales/zh';
registerLocaleData(zh);
import { SlimLoadingBarModule }   from 'ng2-slim-loading-bar';
// Core Module
import { Router, NavigationEnd, ActivatedRoute }     from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  Title }                 from '@angular/platform-browser';
import { CommonModule }           from '@angular/common';
import { MainRoutingModule }      from './main-routing.module';
import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule }          from '@angular/forms';
import { NgModule }               from '@angular/core';
// import { PaginationComponent } from '../pages/common/pagination/pagination.component';
import * as global                from '../../globals';
// Main Componen
import { SharedModule }            from '../../shared/shared-Module/shared.module'

import { MainComponent }           from './main.component';
import { HeaderComponent }         from '../header/header.component';
import { SidebarComponent }        from '../sidebar/sidebar.component';
import { FooterComponent }         from '../footer/footer.component';
import { SearchMenuPipe }          from '../../shared/pipe/search-menu.pipe';
import { SearchResPipe }           from '../../shared/pipe/search-res.pipe';
import { TabbarComponent }         from '../tabbar/tabbar.component';
import { PageToolComponent }       from '../../pages/common/page-tool/page-tool.component';
// 登录状态路由守卫
import { LoginGuard }              from '../../shared/service/login-guard/login-guard.service'
import { TabMoveDirective }        from '../../shared/directive/tab-move.directive'
// 主页
import { HomeComponent }           from '../../pages/home/home.component';
import { UserComponent }           from '../../pages/system/user/user.component';
import { RoleComponent }           from '../../pages/system/role/role.component';
import { AreaComponent }           from '../../pages/system/area/area.component';
import { ResourceComponent }       from '../../pages/system/resource/resource.component';
import { SysBtnComponent }         from '../../pages/system/sys-btn/sys-btn.component';
import { NgSlimScrollModule }      from 'ngx-slimscroll';
import { TabRightClickDirective }  from '../../shared/directive/tab-right-click.directive';

@NgModule({
  declarations: [
    TabMoveDirective,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SearchMenuPipe,
    SearchResPipe,
    TabbarComponent,
    HomeComponent,
    SysBtnComponent,
    UserComponent,
    ResourceComponent,
    RoleComponent,
    AreaComponent,
    TabRightClickDirective,
 
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgZorroAntdModule.forRoot(),
    MainRoutingModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyC5gJ5x8Yw7qP_DqvNq3IdZi2WUSiDjskk' }),
    // BrowserAnimationsModule,
    // BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    SlimLoadingBarModule,
    NgSlimScrollModule
  ],
  providers: [ 
      Title, 
      { provide: RouteReuseStrategy, useClass: SimpleReuseStrategy },
      LocalStorageService,
      LoginGuard
      ],
      bootstrap: [ ]
})

export class MainModule {
  constructor(private router: Router, private titleService: Title, private route: ActivatedRoute) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        var title = '管理系统 | ' + this.route.snapshot.firstChild.data['title'];
        this.titleService.setTitle(title);
      }
    });
  }
}


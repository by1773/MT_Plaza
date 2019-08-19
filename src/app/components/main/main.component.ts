import {  Component, 
          HostListener, 
          Renderer2, 
          OnInit,
          SimpleChanges,
          OnChanges,
          OnDestroy }                 from '@angular/core';
import {  Title }                     from '@angular/platform-browser';
import {  SlimLoadingBarService }     from 'ng2-slim-loading-bar';
import {  SimpleReuseStrategy }       from '../../SimpleReuseStrategy';
import { 
          Router, 
          NavigationEnd,
          NavigationStart, 
          ActivatedRoute ,
          NavigationCancel,
          NavigationError }          from '@angular/router';
import * as global                   from '../../globals';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { FlipInY ,ZoomInDown} from '../../animations/animations'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
   animations: [
    FlipInY
  ]
})

export class MainComponent implements OnInit,OnChanges,OnDestroy {

  pageSettings;
   private sub: any;


  ngOnDestroy(): any {
    this.sub.unsubscribe();
  }
  ngOnInit() {
    // page settings
    this.pageSettings = {
      pageSidebarMinified: false,
      pageContentFullHeight: false,
      pageContentFullWidth: false,
      pageContentInverseMode: false,
      pageWithFooter: false,
      pageWithoutSidebar: false,
      pageSidebarRight: false,
      pageSidebarRightCollapsed: false,
      pageSidebarTwo: false,
      pageSidebarWide: false,
      pageSidebarTransparent: false,
      pageSidebarLight: false,
      pageTopMenu: false,
      pageEmpty: false,
      pageBodyWhite: false,
      pageMobileSidebarToggled: false,
      pageMobileSidebarFirstClicked: false,
      pageMobileSidebarRightToggled: false,
      pageMobileSidebarRightFirstClicked: false
    };
  }

	// window scroll
  pageHasScroll;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    if (top > 0) {
      this.pageHasScroll = true;
    } else {
      this.pageHasScroll = false;
    }
  }

	// clear settings to default
	clearSettings() {
		this.pageSettings.pageSidebarMinified = false;
		this.pageSettings.pageContentFullHeight = false,
		this.pageSettings.pageContentFullWidth = false;
		this.pageSettings.pageWithFooter = false;
		this.pageSettings.pageWithoutSidebar = false;
		this.pageSettings.pageSidebarRight = false;
		this.pageSettings.pageSidebarRightCollapsed = false;
		this.pageSettings.pageSidebarTwo = false;
		this.pageSettings.pageSidebarWide = false;
		this.pageSettings.pageSidebarTransparent = false;
		this.pageSettings.pageSidebarLight = false;
		this.pageSettings.pageTopMenu = false;
		this.pageSettings.pageEmpty = false;
		this.pageSettings.pageBodyWhite = false;
		this.pageSettings.pageContentInverseMode = false;
		this.pageSettings.pageMobileSidebarToggled = false;
		this.pageSettings.pageMobileSidebarFirstClicked = false;
		this.pageSettings.pageMobileRightSidebarToggled = false;
		this.pageSettings.pageMobileRightSidebarFirstClicked = false;
  	this.renderer.removeClass(document.body, 'bg-white');
	}

	// set page settings
  setPageSettings(settings) {
  	for (let option in settings) {
  		this.pageSettings[option] = settings[option];
  		if (option == 'pageBodyWhite' && settings[option] == true) {
  		  this.renderer.addClass(document.body, 'bg-white');
  		}
		}
  }

  // set page minified
  onToggleSidebarMinified(val: boolean):void {
  	if (this.pageSettings.pageSidebarMinified) {
  		this.pageSettings.pageSidebarMinified = false;
  	} else {
  		this.pageSettings.pageSidebarMinified = true;
  	}
	}

  // set page right collapse
  onToggleSidebarRight(val: boolean):void {
  	if (this.pageSettings.pageSidebarRightCollapsed) {
  		this.pageSettings.pageSidebarRightCollapsed = false;
  	} else {
  		this.pageSettings.pageSidebarRightCollapsed = true;
  	}
	}

  // hide mobile sidebar
  onHideMobileSidebar(val: boolean):void {
    if (this.pageSettings.pageMobileSidebarToggled) {
      if (this.pageSettings.pageMobileSidebarFirstClicked) {
        this.pageSettings.pageMobileSidebarFirstClicked = false;
      } else {
  		  this.pageSettings.pageMobileSidebarToggled = false;
      }
    }
	}

  // toggle mobile sidebar
  onToggleMobileSidebar(val: boolean):void {
    if (this.pageSettings.pageMobileSidebarToggled) {
  		this.pageSettings.pageMobileSidebarToggled = false;
    } else {
  		this.pageSettings.pageMobileSidebarToggled = true;
  		this.pageSettings.pageMobileSidebarFirstClicked = true;
    }
	}


  // hide right mobile sidebar
  onHideMobileRightSidebar(val: boolean):void {
    if (this.pageSettings.pageMobileRightSidebarToggled) {
      if (this.pageSettings.pageMobileRightSidebarFirstClicked) {
        this.pageSettings.pageMobileRightSidebarFirstClicked = false;
      } else {
  		  this.pageSettings.pageMobileRightSidebarToggled = false;
      }
    }
	}

  // toggle right mobile sidebar
  onToggleMobileRightSidebar(val: boolean):void {
    if (this.pageSettings.pageMobileRightSidebarToggled) {
  		this.pageSettings.pageMobileRightSidebarToggled = false;
    } else {
  		this.pageSettings.pageMobileRightSidebarToggled = true;
  		this.pageSettings.pageMobileRightSidebarFirstClicked = true;
    }
	}
  //路由列表
  menuList: Array<{ title: string, module: string, power: string, isSelect: boolean }> = [];
  public ActiveIndex:number = 1;
  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private slimLoader: SlimLoadingBarService , 
    private router: Router,
    private renderer: Renderer2) {
    this.getMenuList();
    this.router.events.filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) {route = route.firstChild; }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
        // 路由data的标题
        console.log(event)
        const title = event['title'];
        this.menuList.forEach(p => p.isSelect = false);
        const menu = { title: title, module: event['module'], power: event['power'], isSelect: true};
        this.titleService.setTitle(title);
        const exitMenu = this.menuList.find(info => info.title === title);
        if (exitMenu) { // 如果存在不添加，当前表示选中
          this.menuList.forEach(p => p.isSelect = p.title === title);
          return ;
        }
        this.menuList.push(menu);
        // console.log(this.menuList)
        this.menuList.forEach((i,e)=>{
            if(i.isSelect){
               this.ActiveIndex = 1+e
            }
        })
      });
          // Listen the navigation events to start or complete the slim bar loading
        this.sub = this.router.events.subscribe(event => {
          if (event instanceof NavigationStart) {
            this.slimLoader.start();
          } else if (event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError) {
            this.slimLoader.complete();
          }
        }, (error: any) => {
          this.slimLoader.complete();
        });
  

      }
      // 关闭当前选项标签（不包括首页）
      closeUrl(module: string, isSelect: boolean) {
          // 当前关闭的是第几个路由
          const index = this.menuList.findIndex(p => p.module === module);
          // 如果只有一个不可以关闭
          if (this.menuList.length === 1 ) {return ; }

          this.menuList = this.menuList.filter( p => p.module !== module);
          // 删除复用
          SimpleReuseStrategy.deleteRouteSnapshot(module);
          // SimpleReuseStrategy.deleteRouteSnapshot(module);
          if (!isSelect) {return; }
          // 显示上一个选中
          let menu = this.menuList[index - 1];
          if (!menu) { // 如果上一个没有下一个选中
             menu = this.menuList[0];
          }
          // console.log(this.menuList);
          this.menuList.forEach(p => p.isSelect = p.module === menu.module );
          // 显示当前路由信息
          console.log(menu.module)
          this.router.navigate(['app/' + menu.module]);
      }
      // 关闭其他选项标签（不包括首页）
      closeCloseOther() {
              let currentTab = this.menuList.filter(p => p.isSelect == true);
              let otherTab = this.menuList.filter(p => p.isSelect == false);
              this.menuList = currentTab;
              if(currentTab[0].module !== 'home'){
                this.getMenuHome()
              }
              // this.getMenuList();
              if (this.menuList.length == 1) return;
              for (var i = 0; i < otherTab.length; i++) {
                  SimpleReuseStrategy.deleteRouteSnapshot(otherTab[i].module);
              }

              this.router.navigate(['app/' + currentTab[0].module]);
          }
      // 关闭所有选项标签（不包括首页）
      closeCloseAll() {
          if (this.menuList.length == 1) return;
          for (var i = 1; i < this.menuList.length; i++) {
              SimpleReuseStrategy.deleteRouteSnapshot(this.menuList[i].module);
          }
          let tempList = this.menuList[0];
          this.menuList.splice(0, this.menuList.length);
          this.menuList.push(tempList);
          console.log(this.menuList[0].module)
          this.router.navigate(['app/' + this.menuList[0].module]);
      }
      getMenuList(): void {
            let menu = { title: "首页", module: "home", power: "", isSelect: true };
            this.menuList.unshift(menu);
      }
      getMenuHome(): void {
          let menu = { title: "首页", module: "home", power: "", isSelect: false };
          this.menuList.unshift(menu);
      }
      ngOnChanges (changes: SimpleChanges){
        console.log('11',changes)
      }

}

import { Component, Input, Output, EventEmitter, Renderer2,OnInit } from '@angular/core'
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router'
import { LocalStorageService } from '../../shared/service/storage/local-storage.service'
import { FormControl} from "@angular/forms"
import { MENU } from '../../data/menu'
import { API } from '../../config/servers'
@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
  @Output()
    onPageChanged = new EventEmitter();
    public menuFilter: FormControl = new FormControl();
  @Input() pageSidebarTwo;
	@Output() toggleSidebarRightCollapsed = new EventEmitter<boolean>();
	@Output() toggleMobileSidebar = new EventEmitter<boolean>();
	@Output() toggleMobileRightSidebar = new EventEmitter<boolean>();
  mobileSidebarToggle() {
		this.toggleMobileSidebar.emit(true);
  }
  mobileRightSidebarToggle() {
		this.toggleMobileRightSidebar.emit(true);
  }
	toggleSidebarRight() {
		this.toggleSidebarRightCollapsed.emit(true);
	}
  public menus = MENU
  public values:string
  constructor(
    private renderer: Renderer2,
    public router :Router,
    public lgs:LocalStorageService
    ) {
    this.menuFilter.valueChanges
    .debounceTime(300)
    .subscribe((value) => {
      this.values = value
      console.log(this.values)
      });
  
  }
  goRouterUrl(RouterUrl){
    // 清空表单输入框的值
      this.menuFilter.reset()
      // this.router.navigate(['app/'+RouterUrl]);
  }
  ngOnInit(){
    // console.log(API)
  }
  loginOut(){
    this.lgs.remove('Token')
    this.router.navigate(['login']);
  }
}

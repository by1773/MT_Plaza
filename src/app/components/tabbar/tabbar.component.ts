import { Component, OnInit,Input,Output,EventEmitter,DoCheck ,OnChanges, SimpleChanges ,ChangeDetectionStrategy} from '@angular/core';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent implements OnInit,OnChanges  {
@Input()
    menuList:any;
@Output()
closeSelf = new EventEmitter();
@Output()
closeOther = new EventEmitter();
@Output()
closeAll = new EventEmitter();
public flagArr:Array<{visible:boolean}> = []
  constructor(private router: Router,) { }
      ngOnInit() {
      }
      closeUrlemit(menu){
          this.closeSelf.emit(menu)
      }  
      closeCloseOther(){
          this.closeOther.emit(true)
      }
      closeCloseAll(){
          this.closeAll.emit(true)
      }
      ngOnChanges(){
      }
      rightClickHandler(clickIndex){
        
      }


}

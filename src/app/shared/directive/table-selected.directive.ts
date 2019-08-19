import {Directive, ElementRef, EventEmitter, Input, OnInit, Output,AfterViewInit,OnChanges} from "@angular/core";

@Directive({  
   selector: '[appTableSelected]'
})
export class TableSelectedDirective implements OnInit,AfterViewInit,OnChanges{
  @Input('appTableSelected') appTableSelected: boolean;
  // @Output() rightClickEvent: EventEmitter<any> = new EventEmitter();
  constructor(public el: ElementRef){} 
  ngOnInit(){
    let self = this;
	}
	ngAfterViewInit() { // 模板中的元素已创建完成
    // console.dir(this.elementRef.nativeElement.querySelector('div'));
    // let greetDiv: HTMLElement = this.elementRef.nativeElement.querySelector('div'); 
    // greetDiv.style.backgroundColor = 'red';
  }
  ngOnChanges(){
  	if(this.appTableSelected){
  		this.el.nativeElement.style.background ='#e7f7ff'
  	}else{
  		this.el.nativeElement.style.background ='#fff'
  	}
  }
}
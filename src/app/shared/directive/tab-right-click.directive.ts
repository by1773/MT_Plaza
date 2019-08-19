import {Directive, ElementRef, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Directive({  
   selector: '[appTabRightClick]'
})
export class TabRightClickDirective implements OnInit{
  @Input('appTabRightClick') rightClick: number;
  @Output() rightClickEvent: EventEmitter<any> = new EventEmitter();
  constructor(public el: ElementRef){} 
  ngOnInit(){
    let self = this;
    this.el.nativeElement.addEventListener('contextmenu', function (event) {
      event.preventDefault();
      self.rightClickEvent.emit(self.rightClick);
    })
  }
}
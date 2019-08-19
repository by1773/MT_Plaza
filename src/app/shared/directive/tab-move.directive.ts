import {Directive, Input, ElementRef, Renderer, HostListener,OnChanges,OnInit,SimpleChanges } from "@angular/core";

@Directive({
  selector: '[appTabMove]'
})


export class TabMoveDirective implements OnChanges,OnInit{
	@Input('appTabMove') 
	appTabMove:any

  constructor(private elementRef: ElementRef, private renderer: Renderer) {

   }

ngOnChanges (change:SimpleChanges){
	console.log('---',change)
}
ngOnInit(){
	console.log('start')
}
}

import {Directive, Input, ElementRef, Renderer, HostListener} from "@angular/core";

@Directive({
  selector: '[appTable]'
})
export class TableDirective {
  private _defaultColor = '#fff';

  @Input('appTable')
  isselect: any; // 输入属性，用于设置元素的背景颜色

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    this.setStyle(this._defaultColor);
  }

  @HostListener('click')
  onClick() { // 监听宿主元素的点击事件，设置元素背景色
    console.log(this.isselect)
    this.setStyle('#eee');
    console.log(this.elementRef)
  }

  private setStyle(color: string) { // 调用renderer对象提供的API设置元素的背景颜色
    this.renderer.setElementStyle(this.elementRef.nativeElement, 
      'backgroundColor', color);
  }
}


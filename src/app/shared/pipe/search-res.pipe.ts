import {Pipe, Injectable, PipeTransform} from '@angular/core';
import {  DomSanitizer } from '@angular/platform-browser'
@Pipe({
  name: 'searchRes'
})
@Injectable()
export class SearchResPipe implements PipeTransform {
  constructor(private sanitizer:DomSanitizer){}
  transform(val: string, keyword: string):any {

    let Reg=new RegExp(keyword,"i");
    if(val){
      let res = val.replace( Reg,`<span style="color: #ff2424;font-size:14px">${keyword}</span>`);
      console.log(res)
      return this.sanitizer.bypassSecurityTrustHtml(res);
    }
  }
}
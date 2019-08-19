import { Component, OnInit } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd';
import { FadeInDown,FadeInLeft } from '../../../../animations/animations'
@Component({
  selector: 'app-left-type-list',
  templateUrl: './left-type-list.component.html',
  styleUrls: ['./left-type-list.component.css'],
   animations: [
   FadeInDown
  ]
})
export class LeftTypeListComponent implements OnInit {

  constructor() { }
  expandKeys = [ '1001', '10001' ];
  nodes = [
    new NzTreeNode({
      title   : '图标',
      key     : '1001',
      children: [
        {
          title   : '创意图标',
          key     : '10001',
        },
        {
          title   : '插画',
          key     : '10002',
          children: []
        }
      ]
    }),
    new NzTreeNode({
      title   : '图形',
      key     : '1002',
    })
  ];

  mouseAction(name: string, e: any): void {
    console.log(name, e);
  }
ngOnInit(){

}
}

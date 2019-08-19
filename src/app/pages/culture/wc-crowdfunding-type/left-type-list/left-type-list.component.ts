import { Component, OnInit } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd';

@Component({
  selector: 'app-left-type-list',
  templateUrl: './left-type-list.component.html',
  styleUrls: ['./left-type-list.component.css']
})
export class LeftTypeListComponent implements OnInit {

  constructor() { }
  expandKeys = [ '1001', '10001' ];
  nodes = [
    new NzTreeNode({
      title   : '袋子',
      key     : '1001',
      children: [
        {
          title   : '布袋',
          key     : '10001',
        },
        {
          title   : '塑料袋',
          key     : '10002',
          children: []
        }
      ]
    }),
    new NzTreeNode({
      title   : '酒水',
      key     : '1002',
    })
  ];

  mouseAction(name: string, e: any): void {
    console.log(name, e);
  }
ngOnInit(){

}
}

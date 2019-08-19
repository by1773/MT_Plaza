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
      title   : '酒',
      key     : '1001',
      children: [
        {
          title   : '茅台',
          key     : '10001',
        },
        {
          title   : '习酒',
          key     : '10002',
        }
      ]
    }),
 		  new NzTreeNode({
      title   : '服装',
      key     : '1001',
      children: [
        {
          title   : '男装',
          key     : '10001',
        },
        {
          title   : '女装',
          key     : '10002',
        }
      ]
    }),
 		    new NzTreeNode({
      title   : '烟',
      key     : '1001',
      children: [
        {
          title   : '玉溪',
          key     : '10001',
        },
        {
          title   : '中华',
          key     : '10002',
        },
        {
          title   : '富贵',
          key     : '10002',
        }
      ]
    }),
  ];

  mouseAction(name: string, e: any): void {
    console.log(name, e);
  }
ngOnInit(){

}
}

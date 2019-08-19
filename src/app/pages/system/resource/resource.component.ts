import { Component, ViewEncapsulation,OnInit } from '@angular/core';
import { AppComponent }  from '../../../app.component';
import * as global from '../../../globals';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})

export class ResourceComponent implements OnInit {
	global = global;

  constructor(private app: AppComponent) {
      app.setPageSettings({
        pageContentFullHeight: true,
        pageContentFullWidth: true
      });
  }
  ngOnInit() {
  }


  menus=[
  {
		'icon': 'fa fa-align-left',
		'title': '资源管理',
		'url': '',
		'caret': 'true',
		'submenu': [{
			'url': '',
			'title': '会员检验',
			'caret': 'true',
			'submenu': [
				{
				'url': '',
				'title': '会员检验',
				'caret': 'true',
						'submenu': [
							{
								'url': '',
								'title': '查看',
							},
							{
								'url': '',
								'title': '新增'
							},
							{
								'url': '',
								'title': '修改'
							},
							{
								'url': '',
								'title': '删除'
							}]
				},
				{
				'url': '',
				'title': '说酒币申请记录',
				'caret': 'true',
							'submenu': [{
								'url': '',
								'title': '查看',
								},
								{
									'url': '',
									'title': '审批记录'
								},
								{
									'url': '',
									'title': '申请记录'
								}]
				}]
			}]
		}];
}


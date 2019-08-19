export const MENU  = [
  	{
		'icon': 'fa fa-user',
		'title': '模块管理',
		'url': '',
		'caret': 'true',
		'submenu': [{
			'url': 'member/memberList',
			'title': '会员列表'
		},{
			'url': 'member/coinApply',
			'title': '说酒币申请记录'
		},{
			'url': 'member/coinGive',
			'title': '说酒币赠送记录'
		}]
	},{
		'icon': 'fa fa-envelope-o',
		'title': '首页管理',
		'caret': 'true',
		'url': '',
		'submenu': [{
			'url': 'news/newsType',
			'title': '咨讯类型管理'
		},{
			'url': 'news/new',
			'title': '咨讯管理'
		},{
			'url': 'news/newsHot',
			'title': '资讯热点'
		},{
			'url': 'news/newsAdd',
			'title': '新增咨讯'
		}]
	},
  {
		'icon': 'fa fa-skyatlas',
		'title': '产品管理',
		'url': '',
		'caret': 'true',
		'submenu': [
		{
			'url': 'culture/wcMaT/list',
			'title': '素材类型管理'
		},
		{
			'url': 'culture/wcMaL/list',
			'title': '素材库管理'
		},
		{
			'url': 'culture/wcMaO/list',
			'title': '素材订单'
		},
		{
			'url': 'culture/wcPrT/list',
			'title': '文创产品类型管理'
		},
		{
			'url': 'culture/wcPr/list',
			'title': '文创产品管理'
		},
		// {
		// 	'url': 'culture/wcPrO/list',
		// 	'title': '文创产品订单'
		// },
		// {
		// 	'url': 'culture/wcPrS/list',
		// 	'title': '文创产品售后申请'
		// },
		// {
		// 	'url': 'culture/wcPrC/list',
		// 	'title': '文创产品评价'
		// },
		// {
		// 	'url': 'culture/wcCrT/list',
		// 	'title': '文创众筹类型管理'
		// },
		// {
		// 	'url': 'culture/wcCrF/list',
		// 	'title': '文创众筹管理'
		// },
		// {
		// 	'url': 'culture/wcCrO/list',
		// 	'title': '文创众筹订单'
		// }

		]
	},
	{
		'icon': 'fa fa-sliders',
		'title': '系统管理',
		'url': '',
		'caret': 'true',
		'submenu': [{
			'url': 'sysUser',
			'title': '用户管理'
		},{
			'url': 'sysRole',
			'title': '角色管理'
		},{
			'url': 'sysResource',
			'title': '资源管理'
		},{
			'url': 'sysArea',
			'title': '区域管理'
		}]
	},
	{
		'icon': 'fa fa-question-circle',
		'title': '帮助',
		'url': '',
		'caret': 'true',
		'submenu': [
			{
				'url': 'GalleryV1Page',
				'title': '意见反馈'
			},{
				'url': 'map',
				'title': '地图'
			}]
	},
	// {
	// 	'icon': 'fa fa-th-large',
	// 	'title': 'Dashboard',
	// 	'url': '',
	// 	'caret': 'true',
	// 	'submenu': [{
	// 		'url': 'dashboard/v1',
	// 		'title': 'Dashboard v1'
	// 	},{
	// 		'url': 'dashboard/v2',
	// 		'title': 'Dashboard v2'
	// 	}]
	// },
	// {
	// 	'icon': 'fa fa-hdd',
	// 	'title': 'Email',
	// 	'url': '',
	// 	'badge': '10',
	// 	'submenu': [{
	// 		'url': 'email/inbox',
	// 		'title': 'Inbox'
	// 	},{
	// 		'url': 'email/compose',
	// 		'title': 'Compose'
	// 	},{
	// 		'url': 'email/detail',
	// 		'title': 'Detail'
	// 	}]
	// },{
	// 	'icon': 'fab fa-simplybuilt',
	// 	'title': 'Widgets',
	// 	'label': 'NEW',
	// 	'url': 'widget'
	// },{
	// 	'icon': 'fa fa-gem',
	// 	'title': 'UI Elements',
	// 	'url': '',
	// 	'label': 'NEW',
	// 	'caret': 'true',
	// 	'submenu': [{
	// 		'url': 'ui/general',
	// 		'title': 'General',
	// 		'highlight': 'true'
	// 	},{
	// 		'url': 'ui/typography',
	// 		'title': 'Typography'
	// 	},{
	// 		'url': 'ui/tabs-accordions',
	// 		'title': 'Tabs & Accordions'
	// 	},{
	// 		'url': 'ui/modal-notification',
	// 		'title': 'Modal & Notification',
	// 		'highlight': 'true'
	// 	},{
	// 		'url': 'ui/widget-boxes',
	// 		'title': 'Widget Boxes'
	// 	},{
	// 		'url': 'ui/media-object',
	// 		'title': 'Media Object'
	// 	},{
	// 		'url': 'ui/buttons',
	// 		'title': 'Buttons',
	// 		'highlight': 'true'
	// 	},{
	// 		'url': 'ui/icons',
	// 		'title': 'Icons'
	// 	},{
	// 		'url': 'ui/simple-line-icons',
	// 		'title': 'Simple Line Ioncs'
	// 	},{
	// 		'url': 'ui/ionicons',
	// 		'title': 'Ionicons'
	// 	},{
	// 		'url': 'ui/language-icon',
	// 		'title': 'Language Icon'
	// 	},{
	// 		'url': 'ui/social-buttons',
	// 		'title': 'Social Buttons'
	// 	}]
	// },{
	// 	'img': '/assets/img/logo/logo-bs4.png',
	// 	'title': 'Bootstrap 4',
	// 	'url': 'bootstrap-4',
	// 	'label': 'NEW'
	// },{
	// 	'icon': 'fa fa-list-ol',
	// 	'title': 'Form Stuff',
	// 	'url': 'form-stuff',
	// 	'label': 'NEW'
	// },{
	// 	'icon': 'fa fa-table',
	// 	'title': 'Tables',
	// 	'url': 'tables'
	// },{
	// 	'icon': 'fa fa-star',
	// 	'title': 'Frontend',
	// 	'url': '',
	// 	'caret': 'true',
	// 	'submenu': [{
	// 		'url': '',
	// 		'title': 'One Page Parallax'
	// 	},{
	// 		'url': '',
	// 		'title': 'Blog'
	// 	},{
	// 		'url': '',
	// 		'title': 'Forum'
	// 	},{
	// 		'url': '',
	// 		'title': 'E-Commerce'
	// 	}]
	// },{
	// 	'icon': 'fa fa-chart-pie',
	// 	'title': 'Chart',
	// 	'url': '',
	// 	'caret': 'true',
	// 	'submenu': [{
	// 		'url': 'chart/ngx',
	// 		'title': 'Ngx Chart'
	// 	},{
	// 		'url': 'chart/d3',
	// 		'title': 'd3 Chart'
	// 	}]
	// },{
	// 	'icon': 'fa fa-calendar',
	// 	'title': 'Calendar',
	// 	'url': 'calendar'
	// },{
	// 	'icon': 'fa fa-map',
	// 	'title': 'Map',
	// 	'url': 'map'
	// },{
	// 	'icon': 'fa fa-image',
	// 	'title': 'Gallery',
	// 	'url': '',
	// 	'caret': 'true',
	// 	'submenu': [{
	// 		'url': 'gallery/v1',
	// 		'title': 'Gallery v1'
	// 	},{
	// 		'url': 'gallery/v2',
	// 		'title': 'Gallery v2'
	// 	}]
	// },{
	// 	'icon': 'fa fa-cogs',
	// 	'title': 'Page Options',
	// 	'url': '',
	// 	'caret': 'true',
	// 	'submenu': [{
	// 		'url': 'page-option/page-blank',
	// 		'title': 'Blank Page'
	// 	},{
	// 		'url': 'page-option/page-with-footer',
	// 		'title': 'Page with Footer'
	// 	},{
	// 		'url': 'page-option/page-without-sidebar',
	// 		'title': 'Page without Sidebar'
	// 	},{
	// 		'url': 'page-option/page-with-right-sidebar',
	// 		'title': 'Page with Right Sidebar'
	// 	},{
	// 		'url': 'page-option/page-with-minified-sidebar',
	// 		'title': 'Page with Minified Sidebar'
	// 	},{
	// 		'url': 'page-option/page-with-two-sidebar',
	// 		'title': 'Page with Two Sidebar'
	// 	},{
	// 		'url': 'page-option/page-full-height',
	// 		'title': 'Full Height Content'
	// 	},{
	// 		'url': 'page-option/page-with-wide-sidebar',
	// 		'title': 'Page with Wide Sidebar'
	// 	},{
	// 		'url': 'page-option/page-with-light-sidebar',
	// 		'title': 'Page with Light Sidebar'
	// 	},{
	// 		'url': 'page-option/page-with-top-menu',
	// 		'title': 'Page with Top Menu'
	// 	},{
	// 		'url': 'page-option/page-with-mixed-menu',
	// 		'title': 'Page with Mixed Menu'
	// 	},{
	// 		'url': 'page-option/page-with-transparent-sidebar',
	// 		'title': 'Page with Transparent Sidebar'
	// 	}]
	// },{
	// 	'icon': 'fa fa-gift',
	// 	'title': 'Extra',
	// 	'url': '',
	// 	'caret': 'true',
	// 	'submenu': [{
	// 		'url': 'extra/timeline',
	// 		'title': 'Timeline'
	// 	},{
	// 		'url': 'extra/coming-soon',
	// 		'title': 'Coming Soon Page'
	// 	},{
	// 		'url': 'extra/search-results',
	// 		'title': 'Search Results'
	// 	},{
	// 		'url': 'extra/invoice',
	// 		'title': 'Invoice'
	// 	},{
	// 		'url': 'extra/error-page',
	// 		'title': '404 Error Page'
	// 	},{
	// 		'url': 'extra/profile',
	// 		'title': 'Profile Page'
	// 	}]
	// },{
	// 	'icon': 'fa fa-key',
	// 	'title': 'Login & Register',
	// 	'url': '',
	// 	'caret': 'true',
	// 	'submenu': [{
	// 		'url': 'login/v1',
	// 		'title': 'Login'
	// 	},{
	// 		'url': 'login/v2',
	// 		'title': 'Login v2'
	// 	},{
	// 		'url': 'login/v3',
	// 		'title': 'Login v3'
	// 	},{
	// 		'url': 'register/v3',
	// 		'title': 'Register v3'
	// 	}]
	// },{
	// 	'icon': 'fa fa-cube',
	// 	'title': 'Version',
	// 	'url': '',
	// 	'label': 'NEW',
	// 	'caret': 'true',
	// 	'submenu': [{
	// 		'url': '',
	// 		'title': 'HTML'
	// 	},{
	// 		'url': '',
	// 		'title': 'AJAX'
	// 	},{
	// 		'url': '',
	// 		'title': 'ANGULAR JS'
	// 	},{
	// 		'url': '',
	// 		'title': 'ANGULAR JS 5'
	// 	},{
	// 		'url': '',
	// 		'title': 'LARAVEL',
	// 		'highlight': 'true'
	// 	},{
	// 		'url': '',
	// 		'title': 'MATERIAL DESIGN'
	// 	},{
	// 		'url': '',
	// 		'title': 'APPLE DESIGN'
	// 	},{
	// 		'url': '',
	// 		'title': 'TRANSPARENT DESIGN'
	// 	}]
	// },{
	// 	'icon': 'fa fa-medkit',
	// 	'title': 'Helper',
	// 	'url': '',
	// 	'caret': 'true',
	// 	'submenu': [{
	// 		'url': 'helper/css',
	// 		'title': 'Predefined CSS Classes'
	// 	}]
	// },{
	// 	'icon': 'fa fa-align-left',
	// 	'title': 'Menu Level',
	// 	'url': '',
	// 	'caret': 'true',
	// 	'submenu': [{
	// 		'url': '',
	// 		'title': 'Menu 1.1',
	// 		'caret': 'true',
	// 		'submenu': [{
	// 			'url': '',
	// 			'title': 'Menu 2.1',
	// 			'caret': 'true',
	// 			'submenu': [{
	// 				'url': '',
	// 				'title': 'Menu 3.1',
	// 			},{
	// 				'url': '',
	// 				'title': 'Menu 3.2'
	// 			}]
	// 		},{
	// 			'url': '',
	// 			'title': 'Menu 2.2'
	// 		},{
	// 			'url': '',
	// 			'title': 'Menu 2.3'
	// 		}]
	// 	},{
	// 		'url': '',
	// 		'title': 'Menu 1.2'
	// 	},{
	// 		'url': '',
	// 		'title': 'Menu 1.3'
	// 	}]
	// }
	];

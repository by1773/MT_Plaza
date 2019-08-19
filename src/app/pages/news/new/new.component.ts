import { Component,DoCheck} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2'
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent{
  Aindex:number = 1
  tabs = {
    generalTab: true,
		widthAndHeightTab: false,
		textAndFontTab: false,
		marginTab: false,
		paddingTab: false,
		backgroundColorTab: false,
		textColorTab: false
  };

  showTab(e) {
    for (let key in this.tabs) {
      if (key == e) {
        this.tabs[key] = true;
      } else {
  		  this.tabs[key] = false;
      }
  	}
  };
  ngOnInit() {
  }
  swalWarning() {
      swal(
      { 
      title: "确定删除吗？",
      text: "该条数据将不再！", 
      type: "warning",
      showCancelButton: true, 
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "确定删除！",
      showLoaderOnConfirm: false,
      }).then(function(result) { 
         if(result.value){
         swal({
           title:"删除成功！", 
           text:"你的虚拟文件已经被删除。", 
           type:"success",
           timer: 1000
         }); 
         }
        });
  }
  selectTole($event,x){
    console.log($event,x)
  }
  change(index){
     console.log(index)
  }
   tabss = [
    {
      active: true,
      name  : '全部资讯',
      icon  : 'anticon anticon-apple'
    },
    {
      active: false,
      name  : '热门',
      icon  : 'anticon anticon-android'
    },
    {
      active: false,
      name  : '文化',
      icon  : 'anticon anticon-android'
    },
    {
      active: false,
      name  : '知识',
      icon  : 'anticon anticon-android'
    },
    {
      active: false,
      name  : '产品',
      icon  : 'anticon anticon-android'
    },
    {
      active: false,
      name  : '科技',
      icon  : 'anticon anticon-android'
    },
    {
      active: false,
      name  : '艺术',
      icon  : 'anticon anticon-android'
    }
  ];
}

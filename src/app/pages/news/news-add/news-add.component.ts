import { Component, OnInit }                              from '@angular/core';
import { NzMessageService, UploadFile }                   from 'ng-zorro-antd';
import { CropperService }                                 from '../../../shared/service/cropper.service';
import { DomSanitizer }                                   from '@angular/platform-browser';  
import { Validators, FormControl, FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css'],
})
export class NewsAddComponent implements OnInit {
public addNewsForm:FormGroup
public files:any
  constructor(
    private msg: NzMessageService,
    public CropperService:CropperService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
     // this.CropperService.eventEmit.subscribe((value: any) => {
    //        console.log('999',value)
    //     });
  }
  current = 0;
  
   sureFirst(): void {
    this.msg.success('This is a prompt message for success, and it will disappear in 10 seconds', { nzDuration: 10000 });
  }
  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }

  done(): void {
    this.current += 1;
    console.log('done');
  }
  reAddNews(){
    this.current = 0;
  }
  defaultFileList = [
    {
      // uid: -1,
      // name: 'xxx.png',
      // status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      // thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      // uid: -2,
      // name: 'yyy.png',
      // status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      // thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];

  fileList= [...this.defaultFileList];
  // fileList = [];
  previewImage = '';
  previewVisible = false;
  beforeUpload = (file: UploadFile): boolean => {
    let URL = window.URL
    let safeURL =  URL.createObjectURL(file);
    this.files = this.sanitizer.bypassSecurityTrustResourceUrl(safeURL); 
    console.log(file)
    return false;
  }
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }
  CustomRequest =(item) => {
    let URL = window.URL
    let safeURL =  URL.createObjectURL(item.file);
    this.files = this.sanitizer.bypassSecurityTrustResourceUrl(safeURL); 
    console.log(item)
  }
  base64Url($event){
    console.log($event)
    let onceDate = {
      url:$event
    }
    this.fileList.push(onceDate)
    console.log(this.fileList)
  }
  
}


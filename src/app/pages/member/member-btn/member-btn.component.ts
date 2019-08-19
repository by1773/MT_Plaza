import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
// import { HttpServicesService } from '../../../services/http-services/http-services.service';
import { Validators, FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Routes, RouterModule,Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-member-btn',
  templateUrl: './member-btn.component.html',
  styleUrls: ['./member-btn.component.css']
})
export class MemberBtnComponent implements OnInit {

  @Output()
    selectDate = new EventEmitter();
  // public val:validators;
  memberForm: FormGroup
  public ActiveLink:string
  constructor(
    private formBuilder: FormBuilder =new FormBuilder(),
    public ActivatedRoute:ActivatedRoute
  ) {
     // 查询表单
     // this.val = new validators();
     this.memberForm = this.formBuilder.group({
       name: [''],
       truename: [''],
       status: [''],
       phone: [''],
     });
  }
  searchDate(){
    this.selectDate.emit(this.memberForm.value)
  }
  reset(){
    this.memberForm.reset();
   }
  ngOnInit() {
    this.ActiveLink =this.ActivatedRoute.snapshot.data.module;
    console.log(this.ActiveLink)
  }

}
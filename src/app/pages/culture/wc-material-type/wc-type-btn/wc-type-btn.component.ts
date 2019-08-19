import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Routes, RouterModule,Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-wc-type-btn',
  templateUrl: './wc-type-btn.component.html',
  styleUrls: ['./wc-type-btn.component.css']
})
export class WcTypeBtnComponent implements OnInit {
validateForm:FormGroup
public ActiveLink:string;
  constructor(
  	public fb :FormBuilder = new FormBuilder(),
  	public ActivatedRoute:ActivatedRoute,
    public router:Router,
  	) {
  	this.validateForm = this.fb.group({
      userName: [''],
      password: ['']
    });
   }

  ngOnInit() {
  	this.ActiveLink =this.ActivatedRoute.snapshot.data.module;
    console.log(this.ActiveLink)
  }

}

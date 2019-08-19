import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Routes, RouterModule,Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-wc-cro-type-btn',
  templateUrl: './wc-cro-type-btn.component.html',
  styleUrls: ['./wc-cro-type-btn.component.css']
})
export class WcCroTypeBtnComponent implements OnInit {
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

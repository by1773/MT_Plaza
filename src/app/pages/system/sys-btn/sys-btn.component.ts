import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Routes, RouterModule,Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-sys-btn',
  templateUrl: './sys-btn.component.html',
  styleUrls: ['./sys-btn.component.css']
})
export class SysBtnComponent implements OnInit {
	sysForm:FormGroup
	public ActiveLink:string;
  constructor(
  	public fb :FormBuilder = new FormBuilder(),
  	public ActivatedRoute:ActivatedRoute,
    public router:Router,
  	) {
  	this.sysForm = this.fb.group({
      userName: [''],
      password: ['']
    });
  	 }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Routes, RouterModule,Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-fr-btn',
  templateUrl: './fr-btn.component.html',
  styleUrls: ['./fr-btn.component.css']
})
export class FrBtnComponent implements OnInit {
	friendsForm:FormGroup
	public ActiveLink:string;
  constructor(
  	public fb :FormBuilder = new FormBuilder(),
  	public ActivatedRoute:ActivatedRoute,
    public router:Router,
    ) { 
  	this.friendsForm = this.fb.group({
      userName: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }

}

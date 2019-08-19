import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Routes, RouterModule,Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-tra-btn',
  templateUrl: './tra-btn.component.html',
  styleUrls: ['./tra-btn.component.css']
})
export class TraBtnComponent implements OnInit {
	tradForm:FormGroup
	public ActiveLink:string;
  constructor(
  	public fb :FormBuilder = new FormBuilder(),
  	public ActivatedRoute:ActivatedRoute,
    public router:Router,
  	) { 
  this.tradForm = this.fb.group({
      userName: ['0'],
      password: ['']
    });
}

  ngOnInit() {
  	this.ActiveLink =this.ActivatedRoute.snapshot.data.module;
    console.log(this.ActiveLink)
  }

}

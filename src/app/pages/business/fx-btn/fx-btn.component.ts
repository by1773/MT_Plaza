import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Routes, RouterModule,Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-fx-btn',
  templateUrl: './fx-btn.component.html',
  styleUrls: ['./fx-btn.component.css']
})
export class FxBtnComponent implements OnInit {
validateForm:FormGroup
public ActiveLink:string;
  constructor(
  	public fb :FormBuilder = new FormBuilder(),
  	public ActivatedRoute:ActivatedRoute,
    public router:Router,
  	) {
  	this.validateForm = this.fb.group({
      userName: ['0'],
      password: ['']
    });
   }

  ngOnInit() {
  	this.ActiveLink =this.ActivatedRoute.snapshot.data.module;
    console.log(this.ActiveLink)
  }

}

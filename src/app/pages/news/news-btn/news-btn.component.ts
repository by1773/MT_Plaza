import { Component, OnInit,Output,EventEmitter,OnChanges, Input,SimpleChanges,DoCheck,AfterViewChecked} from '@angular/core';
import { Validators, FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Routes, RouterModule,Router,ActivatedRoute} from '@angular/router';
import * as addDays from 'date-fns/add_days';
import * as getISOWeek from 'date-fns/get_iso_week';

@Component({
  selector: 'app-news-btn',
  templateUrl: './news-btn.component.html',
  styleUrls: ['./news-btn.component.css']
})
export class NewsBtnComponent implements OnInit,OnChanges ,DoCheck{
  @Output()
  seleteData = new EventEmitter();
  public ActiveLink:string;
  consultSearchForm: FormGroup;
  date = null; // new Date();
  dateRange = []; // [ new Date(), addDays(new Date(), 3) ];

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }
  constructor(
    public ActivatedRoute:ActivatedRoute,
    public router:Router,
    private formBuilder: FormBuilder =new FormBuilder(),
  ) { 
    this.consultSearchForm = this.formBuilder.group({
      status: ['0'],
      name: [''],
      typeid:['0'],
      begin_time: [''],
      end_time: [''],
    });
  }
  ngDoCheck(){
  	
  }
  ngOnChanges(){}
  searchData(){
    this.seleteData.emit(this.consultSearchForm.value)
  }
  ngOnInit() {
    this.ActiveLink =this.ActivatedRoute.snapshot.data.module;
    console.log(this.ActiveLink)
  }

}

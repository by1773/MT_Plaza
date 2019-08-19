import { Component, OnInit,Output,EventEmitter,OnChanges, SimpleChanges,DoCheck,AfterViewChecked} from '@angular/core';
import { Validators, FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Routes, RouterModule,Router,ActivatedRoute} from '@angular/router';
import * as addDays from 'date-fns/add_days';
import * as getISOWeek from 'date-fns/get_iso_week';

@Component({
  selector: 'app-wc-cro-btn',
  templateUrl: './wc-cro-btn.component.html',
  styleUrls: ['./wc-cro-btn.component.css']
})
export class WcCroBtnComponent implements OnInit,OnChanges {

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
ngOnChanges(){
	console.log(111)
}
  searchData(){
    this.seleteData.emit(this.consultSearchForm.value)
  }
 listOfOption = [];
  size = 'default';
  singleValue = 'a10';
  multipleValue = [ 'a10', 'c12' ];
  tagValue = [ 'a10', 'c12', 'tag' ];

  ngOnInit(): void {
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
	giveCoin(){
		this.router.navigate(['app/member/memberList/giveCoin']);
	}
}

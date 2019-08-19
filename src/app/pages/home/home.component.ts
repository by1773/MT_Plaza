import { Component, OnInit } from '@angular/core';
import { HttpTokenService } from '../../shared/service/http-token/http-token.service'
import { API }  from '../../config/servers'
import { Observable } from 'rxjs/Observable';
// import { Store } from '@ngrx/store';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public HttpTokenService:HttpTokenService) { }

  ngOnInit() {
  		// this.HttpTokenService.get(API.MEMBER_LIST).subscribe((data)=>{
  		// 	console.log(data)
  		// })

  }

}


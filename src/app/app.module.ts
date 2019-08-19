// Core Module
import { 
  Router, 
  NavigationEnd, 
  ActivatedRoute }                 from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Title }                   from '@angular/platform-browser';//BrowserModule
import { CommonModule }            from '@angular/common';
import { AppRoutingModule }        from './app-routing.module';
import { NgbModule }               from '@ng-bootstrap/ng-bootstrap';
import { 
  FormsModule, 
  ReactiveFormsModule }            from '@angular/forms';
import { NgModule }                from '@angular/core';
import { HttpModule }              from '@angular/http';
import {  HttpClientModule  }      from '@angular/common/http';

// Main Component
import { AppComponent }            from './app.component';
// service
import { CropperService }          from './shared/service/cropper.service';
import { HttpTokenService }        from './shared/service/http-token/http-token.service'
import { LocalStorageService }     from './shared/service/storage/local-storage.service';


// import { StoreModule }             from '@ngrx/store';
// import { croppedImgReducer }       from './store/reducers/corppedImg.reduce';
@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    // StoreModule.provideStore({ croppedImg: croppedImgReducer })
    // StoreModule.forRoot(reducers, {croppedImgReducer})
   
  ],
  providers: [ Title,CropperService,HttpTokenService,LocalStorageService],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(private router: Router, private titleService: Title, private route: ActivatedRoute) {
  //   router.events.subscribe((e) => {
  //     if (e instanceof NavigationEnd) {
  //       // var title = '管理系统 | ' + this.route.snapshot.firstChild.data['title'];
  //       // this.titleService.setTitle(title);
  //     }
  //   });
  }
}

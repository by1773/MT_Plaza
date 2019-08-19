import { Injectable }           from '@angular/core';
import { Router,CanActivate }   from '@angular/router';
import { LocalStorageService }  from '../storage/local-storage.service'

@Injectable() 
export class LoginGuard implements CanActivate {
  
    constructor( private router:Router,public LocalStorageService:LocalStorageService){}
    canActivate(){
      let loggerIn:boolean;
      const userinfo = this.LocalStorageService.get('userinfo')
      const token =this.LocalStorageService.get('Token')
      console.log(userinfo,token)
      if(!userinfo || !token){
        console.log('用户未登录--ERROR!')
        loggerIn = false
        this.router.navigate(['login'])
      }else if(userinfo && token){
        console.log('用户已登录--SUCCESS！')
        loggerIn = true
      }
      return loggerIn
    }
}
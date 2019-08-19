import { NgModule } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';
const routes: Routes = [
 { path: '', redirectTo: '/login', pathMatch: 'full' },
 {
     path: 'login',
     loadChildren: './components/login/login.module#LoginModule',
     data: { title:'管理员登陆'}

   },
  {
     path: 'app',
     loadChildren: './components/main/main.module#MainModule',
     data: { title:'管理主页', module: 'main', power: "SHOW" }
  },
  {
    path:'loginout',
    loadChildren: './components/login/login.module#LoginModule'
  },

  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }

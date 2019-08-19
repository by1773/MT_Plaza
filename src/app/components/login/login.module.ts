import { NgModule } 												from '@angular/core';
import { CommonModule } 										from '@angular/common';
import { LoginRoutingModule } 							from './login-routing.module';
import { LoginComponent } 									from './login.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import { SharedModule } 										from '../../shared/shared-Module/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    NgZorroAntdModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

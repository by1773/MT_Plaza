import { Component ,OnInit,AfterContentInit,AfterViewInit} from '@angular/core';
import { Router }           from '@angular/router';
import { NgForm }           from '@angular/forms';
import { Http }             from '@angular/http';
import { AppComponent }     from '../../app.component';
import { LocalStorageService }   from '../../shared/service/storage/local-storage.service';
import { Validators, FormControl, FormGroup,FormBuilder }   from '@angular/forms';
import Stars    from '../../../assets/js/Star'
import Moon     from '../../../assets/js/Moon'
import Meteor   from '../../../assets/js/Meteor'
import { FadeIn ,ZoomInDown} from '../../animations/animations'
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] ,
   animations: [
    FadeIn
  ]
})

export class LoginComponent implements OnInit,AfterViewInit{
  LoginForm: FormGroup
  public flags:boolean = false
  constructor(
    private app: AppComponent,
    private router: Router,
    private lgs:LocalStorageService,
    private fb: FormBuilder = new FormBuilder(),
    private http:Http,
    public  message:NzMessageService
    ) {
      this.LoginForm = this.fb.group({
        userName: [''],
        userPwd: [''],
        remember:['']
      });
      app.setPageSettings({
        pageEmpty: true,
        pageBodyWhite: true
      });
  }

  formSubmit(credentials) {
    this.lgs.set('userinfo','2')
    this.lgs.set('Token','2')
    this.flags = true
    const id = this.message.loading('管理员信息验证中...请稍后', { nzDuration: 0 }).messageId;
    setTimeout(()=>{
     this.message.remove(id);
     this.message.create('success', '验证成功！即将跳转页面',{ nzDuration: 2000 })
    },2000)
    setTimeout(()=>{
      this.flags = false
      this.router.navigate(['app']);

    },4000)
    console.log(this.LoginForm.value)
    // this.http.post('https://my-app.com/api/authenticate', credentials)
    //   .map(res => res.json())
    //   .subscribe(
    //     data => this.lgs.set('id_token', data.id_token),
    //     error => console.log(error)
    //   );
  }
  ngAfterViewInit(){
  	console.log('---login Page---')
    let canvas = document.getElementById("canvas")  as HTMLCanvasElement;
    console.log(canvas)
       let ctx = canvas.getContext('2d'),
        width = window.innerWidth,
        height = window.innerHeight,
        //实例化月亮和星星。流星是随机时间生成，所以只初始化数组
        moon = new Moon(ctx, width, height),
        stars = new Stars(ctx, width, height, 200),
        meteors = [],
        count = 0

        canvas.width = width;
        canvas.height = height;

    const meteorGenerator = ()=> {
        //x位置偏移，以免经过月亮
        let x = Math.random() * width + 800
        meteors.push(new Meteor(ctx, x, height))

        //每隔随机时间，生成新流星
        setTimeout(()=> {
            meteorGenerator()

        }, Math.random() * 2000)
    }

    const frame = ()=>{
        count++
        count % 10 == 0 && stars.blink()
        moon.draw()
        stars.draw()

        meteors.forEach((meteor, index, arr)=> {
            //如果流星离开视野之内，销毁流星实例，回收内存
            if (meteor.flow()) {
                meteor.draw()
            } else {
                arr.splice(index, 1)
            }
        })
        requestAnimationFrame(frame);
    }
    meteorGenerator()
    frame()
  }
  ngOnInit(){}

}
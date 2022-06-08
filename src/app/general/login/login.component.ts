import { NgIf, registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { register } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private testdatas:HeroService) { }

  ngOnInit(): void {
  }
  result:any
  err=""
  logins=new register();
fndata(){
this.testdatas. fnlogin(this.logins).subscribe(res=>{
  this.result=res
if(this.result.status=="Login Failed"){
 this.err="incorrect password or username"
}
else{
  location.href="create"
}
  
})};

fncreat(){
  // console.log(this.logins)
} 
}

import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { HeroService } from 'src/app/hero.service';
import { forgots } from './forgotpassword.model';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor( private tests:HeroService) { }

  ngOnInit(): void {
  }
  
  result:any
  otps=new forgots()
  fnverify(){
this.tests.fnotp(this.otps).subscribe(res=>{
  this.result=res
console.log(this.result.status)

  })};
  }



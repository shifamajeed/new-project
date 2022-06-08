import { Component, OnInit } from '@angular/core';
import { createaccount } from './createaccount.model';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  constructor(private testdatas:HeroService) { }

  ngOnInit(): void {
  }


customer=true;
reseller=false;

accounts=new createaccount();

fnchange(){
console.log(this.accounts.usertype)
  if(this.accounts.usertype=="customer"){
    this.customer=true;
   this.reseller=false;

}
  if(this.accounts.usertype=="reseller"){

  this.customer=false;
  this.reseller=true;

}
}


result:any


  
  fncreates(){
    this.testdatas.fncreate(this.accounts).subscribe(res=>{
      this.result=res
      console.log(this.result.status)
  })};
}

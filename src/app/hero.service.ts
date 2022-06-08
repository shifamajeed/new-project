import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private demo:HttpClient) { }

  fnlogin(data:any){
    console.log(data)
    return this.demo.post('https://cs-ecom.herokuapp.com/common/Ang_Login',data)
  }

  fncreate(data:any){
    return this.demo.post('http://cs-ecom.herokuapp.com/common/Ang_Signup',data)
  }

fnotp(datas:any){
  return this.demo.post("https://cs-ecom.herokuapp.com/common/otpVerify",datas)

}


}


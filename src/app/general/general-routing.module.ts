import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CorouselComponent } from './corousel/corousel.component';

  const routes: Routes = [
    { path: 'forgot', component:  ForgotpasswordComponent },
    { path: 'login', component:  LoginComponent },
    { path: 'create', component:  CreateaccountComponent},
    { path: '', component:CorouselComponent}
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }

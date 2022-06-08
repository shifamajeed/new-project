import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRoutingModule } from './general-routing.module';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DiscriptionComponent } from './discription/discription.component';
import {MatIconModule} from '@angular/material/icon';
import { CorouselComponent } from './corousel/corousel.component';
import {MatMenuModule} from '@angular/material/menu';
import { BarComponent } from './bar/bar.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotpasswordComponent,
    CreateaccountComponent,
    NavbarComponent,
    DiscriptionComponent,
    CorouselComponent,
    BarComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatMenuModule,
    MdbCarouselModule
    
    
    
  ],
  exports:[
    LoginComponent,
    ForgotpasswordComponent,
    CreateaccountComponent,
    NavbarComponent,
    DiscriptionComponent,
    CorouselComponent,
    BarComponent
    
  ]
})
export class GeneralModule { }

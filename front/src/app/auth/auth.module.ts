import {NgModule} from '@angular/core';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {AuthService} from "./services/auth.service";
import {SharedModule} from "../shared/shared.module";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    NgOptimizedImage
  ],
  providers: [AuthService]
})
export class AuthModule { }

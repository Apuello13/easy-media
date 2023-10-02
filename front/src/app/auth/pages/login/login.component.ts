import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {regExp} from "../../../core/util/regExp";
import {lengthField} from "../../../core/util/length-field";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../assets/_scss/auth-page.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private _auth: AuthService) {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(regExp.EMAIL)]],
      password: ['', [Validators.required, Validators.minLength(lengthField.MIN_PASSWORD)]]
    });
  }

  login(): void {
    this._auth.login(this.loginForm.value)
      .subscribe(() => {}, error => {})
  }
}

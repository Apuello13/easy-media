import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {regExp} from "../../../core/util/regExp";
import {lengthField} from "../../../core/util/length-field";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../../assets/_scss/auth-page.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private _auth: AuthService) {
    this.initForm();
  }

  initForm(): void{
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(regExp.TEXT_SPACE)]],
      email: ['', [Validators.required, Validators.pattern(regExp.EMAIL)]],
      password: ['', [Validators.required, Validators.minLength(lengthField.MIN_PASSWORD)]],
      confirmPassword: ['', Validators.required]
    }, {

    });
  }

  passwordsMatchValidator(formGroup: FormGroup) : void {
    const PASSWORD_KEY = 'password';
    const CONFIRM_PASSWORD_KEY = 'confirmPassword';
    const password = formGroup.get(PASSWORD_KEY)?.value;
    const confirmPassword = formGroup.get(CONFIRM_PASSWORD_KEY)?.value;
    const isEquals : boolean = this.validatePasswordMatch(password, confirmPassword);
    formGroup.get(CONFIRM_PASSWORD_KEY)?.setErrors(isEquals ? null : { passwordsNotMatched: true });
  }

  validatePasswordMatch(password: string, confirmPassword: string) : boolean {
    return password === confirmPassword;
  }

  register(): void {
    const { confirmPassword, ...register } = this.registerForm.value;
    this._auth.register(register)
      .subscribe(() => {

      }, error => {

      })
  }
}

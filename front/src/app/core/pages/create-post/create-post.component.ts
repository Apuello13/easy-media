import { Component } from '@angular/core';
import {max} from "rxjs";
import {FormBuilder, FormGroup, isFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html'
})
export class CreatePostComponent {
  postForm!: FormGroup;
  maxLength = { input: 30, textarea: 300 };
  constructor(private fb: FormBuilder) {
    this.initForm();
  }
  initForm(): void {
    this.postForm = this.fb.group({
        title: ['', [Validators.required, Validators.maxLength(this.maxLength.input)]],
        message: ['', [Validators.required, Validators.maxLength(this.maxLength.textarea)]]
    });
  }

  getLength(formControlKey: string) : number{
    return this.postForm.get(formControlKey)?.value.length;
  }
}

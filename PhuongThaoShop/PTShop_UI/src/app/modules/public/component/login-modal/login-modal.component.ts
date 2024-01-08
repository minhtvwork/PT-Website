import { Component, EventEmitter, Output } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  isVisible = false;
  @Output() loginSuccess = new EventEmitter();
  loginForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  submitForm(): void {
    if (this.loginForm.valid) {
      console.log('submit', this.loginForm.value);
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
          console.log(this.loginForm.value);
        }
      });
    }
  }

  constructor(private fb: NonNullableFormBuilder) {}
  
 

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    // Handle login logic here
    this.loginSuccess.emit();
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}

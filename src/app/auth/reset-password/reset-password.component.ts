import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;
  submitted = false;
  showPassword = false;
  showConfirmPassword = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordsMatchValidator
    });
  }

  // custom validator to check if newPassword and confirmPassword match
  private passwordsMatchValidator(group: AbstractControl) {
    const pass = group.get('newPassword')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { passwordMismatch: true };
  }

  get f() {
    return this.resetForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.resetForm.invalid) {
      // show validation errors
      return;
    }

    const payload = {
      email: this.f['email'].value,
      newPassword: this.f['newPassword'].value
    };

    // TODO: call your service to perform the reset (example)
    // this.authService.resetPassword(payload).subscribe(...)

    console.log('Reset payload', payload);
    // optionally clear form or show success message
    // this.resetForm.reset();
    // this.submitted = false;
  }

  toggleShowPassword(field: 'password' | 'confirm') {
    if (field === 'password') this.showPassword = !this.showPassword;
    else this.showConfirmPassword = !this.showConfirmPassword;
  }
}

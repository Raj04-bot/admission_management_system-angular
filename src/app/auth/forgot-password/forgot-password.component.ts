import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  otpSent = false; // toggle for OTP step
  loading = false;
  message = '';
  error = '';

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      otp: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]], // 6-digit OTP
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  // ✅ Custom validator for confirm password
  passwordMatchValidator(form: FormGroup) {
    return form.get('newPassword')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  // ✅ Step 1: Send OTP
  sendOtp() {
    this.message = '';
    this.error = '';

    if (!this.forgotPasswordForm.get('email')?.valid || !this.forgotPasswordForm.get('mobileNumber')?.valid) {
      this.error = 'Enter valid Email and Mobile Number to receive OTP.';
      return;
    }

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.otpSent = true;
      this.message = `OTP sent to ${this.forgotPasswordForm.value.email} and ${this.forgotPasswordForm.value.mobileNumber}`;
    }, 1500);
  }

  // ✅ Step 2: Verify OTP + Reset Password
  onSubmit() {
    this.message = '';
    this.error = '';

    if (this.forgotPasswordForm.invalid) {
      this.error = 'Form is invalid. Please check inputs.';
      return;
    }

    this.loading = true;
    const { email, mobileNumber, otp, newPassword } = this.forgotPasswordForm.value;

    setTimeout(() => {
      this.loading = false;

      // Mock OTP check
      if (otp === '123456') {  // ✅ assume OTP is 123456
        this.message = 'Password reset successful!';
      } else {
        this.error = 'Invalid OTP. Please try again.';
      }
    }, 1500);
  }
}

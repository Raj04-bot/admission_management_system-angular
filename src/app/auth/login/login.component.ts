import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  error = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      identifier: ['', [Validators.required]], // email or mobile
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.error = '';
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    // Simulate login API call
    setTimeout(() => {
      this.loading = false;
      const { identifier, password } = this.loginForm.value;
      if ((identifier === 'test@example.com' || identifier === '9999999999') && password === 'password123') {
        // Success logic here
      } else {
        this.error = 'Invalid credentials';
      }
    }, 1200);
  }
}

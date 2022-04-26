import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loading = false;
  public loginForm!: FormGroup;
  public hidePassword: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async login() {
    if (!this.loginForm.valid) return;

    try {
      this.loading = true;
      await this.authService.login(this.loginForm.value);
      this.router.navigate(['']);
    } catch {
      alert('Wrong login or password.');
    } finally {
      this.loading = false;
    }
  }
}

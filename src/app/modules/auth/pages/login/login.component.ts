import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading = false;
  public loginForm!: FormGroup;
  public authenticated = false;
  public hide = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async login() {
    if (!this.loginForm.valid) { return }
    
    this.loading = true;
    const authorized = await this.authService.login(this.loginForm.value)

    if (authorized) {
      this.authenticated = true;
      this.router.navigate(['']);
      return
    }

    alert('Wrong login or password.')
    this.loading = false;
  }
}
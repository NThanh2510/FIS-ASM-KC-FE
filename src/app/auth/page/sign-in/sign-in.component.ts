import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  
  templateUrl:'./sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit{

  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
 ngOnInit(): void {}

 get username() {
  return this.loginForm.get('username');
}

get password() {
  return this.loginForm.get('password');
}
 
 onSubmit(){
  const { username, password } = this.loginForm.value;
  this.authService.login(username, password).subscribe(
  (response) => {
    console.log("dang nhap thanh cong", response);
    this.router.navigate(['/dashboard'])
  },
  (error) => {
    this.errorMessage = 'Sai tài khoản hoặc mật khẩu';
    console.error('Lỗi đăng nhập', error);
  }
  );
 }

  


  


}


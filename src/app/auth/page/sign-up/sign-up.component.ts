import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from '../../../core/services/sign-up.servece';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit{
  errorMessage: string | null = null;
  signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private signUpService: SignUpService,
    private router: Router
  ) {
  }
  ngOnInit() {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });
  }

  get username() {
    return this.signUpForm.get('password');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get email() {
    return this.signUpForm.get('password');
  }
  get firstName() {
    return this.signUpForm.get('password');
  }
  get lastName() {
    return this.signUpForm.get('password');
  }

 
 onSubmit(){
  const { username, password, email, firstName, lastName } = this.signUpForm.value;
  this.signUpService.signUp(username, password, email, firstName, lastName).subscribe(
    (response) => {
      console.log('Đăng ký thành công:', response);
      this.router.navigate(['/Sign-in'])
    },
    (error) => {
      this.errorMessage = 'Đăng ký thất bại! Vui lòng thử lại.';
      console.error('Lỗi đăng ký:', error);
    }
  );
 }

  


  


}

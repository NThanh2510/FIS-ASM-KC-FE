import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-out',
  standalone: false,
  
  templateUrl: './sign-out.component.html',
  styleUrl: './sign-out.component.scss'
})
export class SignOutComponent implements OnInit{
  constructor(private authService: AuthService,
    private router: Router
  ){}
  ngOnInit(): void {
    this.authService.logOut()
    this.router.navigate(['/dashboard'])
  }

}

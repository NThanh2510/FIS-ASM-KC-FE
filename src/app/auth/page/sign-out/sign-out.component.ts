import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { SignOutService } from '../../../core/services/log-out';

@Component({
  selector: 'app-sign-out',
  standalone: false,
  
  templateUrl: './sign-out.component.html',
  styleUrl: './sign-out.component.scss'
})
export class SignOutComponent implements OnInit{
  constructor(private signOutService: SignOutService,
    private router: Router
  ){}
  ngOnInit(): void {
    this.signOutService.logOut()
    this.router.navigate(['/dashboard'])
  }

}

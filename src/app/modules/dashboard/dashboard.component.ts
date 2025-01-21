import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../core/services/dashboard.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  userData: any;

  constructor(
    private dashboardService: DashboardService,
  private router: Router
  ){}

  ngOnInit(): void {
    if(!this.dashboardService.checkLogin()){
      this.router.navigate(['/Sign-in'])
    }


    this.dashboardService.getUserData().subscribe(
      (reques) => {
        this.userData = reques['result'];
        console.log(reques['result']);
      },
      (error) => {
        // console.log('Lỗi: ', error);   
      }

      
    );
  }
}

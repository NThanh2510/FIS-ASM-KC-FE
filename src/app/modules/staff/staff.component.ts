import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../core/services/auth.service";
import { DashboardService } from "../../core/services/dashboard.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-staff",
  standalone: false,
  templateUrl: "./staff.component.html",
  styleUrls: ["./staff.component.scss"],
})
export class StaffComponent implements OnInit {
  userData: any;

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.dashboardService.getUserData().subscribe((response) => {
      this.userData = response['result']; 
      console.log(this.userData);
    });
  }

  
  onSubmit(): void {
    if (this.userData) {
      const { firstName, lastName, email } = this.userData;

      
      this.authService.update(firstName, lastName, email).subscribe(
        (response) => {
          this.userData = response;
          console.log(response);
          window.location.reload();
        },
        (error) => {
          console.error("Có lỗi ", error);
        }
      );
    }
  }
}

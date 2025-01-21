import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-admin',
  standalone: false,
  
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit{

  dataList: any[] = [];
  hasNoAccess: boolean = true;

  constructor(private adminService: AdminService){}




  ngOnInit(): void {
    this.adminService.getAllUserData().subscribe(
      (reques) => {
        this.dataList = reques['result'];
        console.log(this.dataList);
        if (this.dataList.length === 0) {
          this.hasNoAccess = true; 
        } else {
          this.hasNoAccess = false;
        }
      },
      
      (error) => {
        console.log('Lỗi: ', error); 
      }
    )
  }
}

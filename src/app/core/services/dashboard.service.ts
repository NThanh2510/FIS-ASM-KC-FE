import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { flush } from '@angular/core/testing';


@Injectable({
    providedIn: 'root'
})

export class DashboardService{
    private apiUrl = "http://localhost:8085/user/my-profile";

    constructor(private http: HttpClient, private authService: AuthService){}

    getUserData(): Observable<any>{
        return this.http.get(this.apiUrl);
    }

    checkLogin(){
        if(this.authService.getToken()==null){
            return false;
        }
        return true;
    }


}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class SignOutService{
    private apiUrl = 'http://localhost:8085/logout';
    constructor(private http: HttpClient,
        private authService: AuthService

    ){}
    logOut(){
        this.authService.logout();
        return this.http.post(this.apiUrl,{})
    }

}
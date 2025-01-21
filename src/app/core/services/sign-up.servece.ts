import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class SignUpService {
    private apiUrl = 'http://localhost:8085/register';
    
    constructor(private http: HttpClient ){}

    signUp(username: string, password: string, email: string, firstName: string, lastName:string): Observable<any>{
        const body = { username, password, email, firstName, lastName};
        return this.http.post<any>(this.apiUrl, body)
    }
    
}
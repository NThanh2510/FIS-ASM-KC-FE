import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class AdminService{
    private apiUrl = "http://localhost:8085/user/list";

    constructor(private http: HttpClient){}

    getAllUserData(): Observable<any>{
    
        return this.http.get(this.apiUrl);

    }


}
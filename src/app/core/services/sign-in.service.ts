import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';


@Injectable({
    providedIn: 'root'
})
export class SignInService{
    private apiUrl = 'http://localhost:8085/login';
    private tokenKey = 'jwt_token'

    constructor(private http: HttpClient, private authService: AuthService){}

    login(username: string, password: string): Observable<any>{
        const body = {username, password};
        return this.http.post<any>(this.apiUrl, body).pipe(
            map(response => {
                if(response.result.accessToken){
                    const token = response.result.accessToken;
                    this.authService.setToken(token);
                    return response;
                }
            }),
            catchError(this.handleError)
        );
    }

    private handleError(error: any): Observable<never> {
        console.error('Login error:', error);
        throw error;
      }
}
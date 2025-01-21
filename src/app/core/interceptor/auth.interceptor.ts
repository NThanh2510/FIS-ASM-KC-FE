
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { DashboardService } from '../services/dashboard.service';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private authService: AuthService){}

    intercept(request: HttpRequest<any>, next: HttpHandler){
        const token = this.authService.getToken();
        
        if(token){
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
    
}
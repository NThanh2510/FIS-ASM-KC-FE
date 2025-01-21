import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setToken(token: string): void{
      localStorage.setItem("accessToken", token);
  }

  getToken(): string | null {
      return localStorage.getItem("accessToken")
  }

  isLoggedIn(): boolean{
      return this.getToken() !== null;
  }

  logout(): void {
      localStorage.removeItem("accessToken");
    }

}

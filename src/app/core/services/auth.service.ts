import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiRegister = "http://localhost:8085/register";
  private apiLogin = "http://localhost:8085/login";
  private apiLogOut = "http://localhost:8085/logout";
  private apiUpdate = "http://localhost:8085/user/update";

  constructor(private http: HttpClient) {}

  signUp(
    username: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string
  ): Observable<any> {
    const body = { username, password, email, firstName, lastName };
    return this.http.post<any>(this.apiRegister, body);
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(this.apiLogin, body).pipe(
      map((response) => {
        if (response.result.accessToken) {
          const token = response.result.accessToken;
          this.setToken(token);
          return response;
        }
      })
    );
  }

  update(firstName: string, lastName: string, email: string){
    const body = { firstName, lastName, email};
    return this.http.put<any>(this.apiUpdate, body);
  }

  logOut() {
    this.logout();
    return this.http.post(this.apiLogOut, {});
  }

  setToken(token: string): void {
    localStorage.setItem("accessToken", token);
  }

  getToken(): string | null {
    return localStorage.getItem("accessToken");
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    localStorage.removeItem("accessToken");
  }
}

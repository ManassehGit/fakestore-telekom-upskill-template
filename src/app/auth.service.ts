import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_KEY = "auth_token";
  private user: string = "";
  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    const result = this.http.post('https://fakestoreapi.com/auth/login', {username, password});
    result.subscribe(data => {
      if(data){
        localStorage.setItem('auth_token', JSON.stringify(data));
        this.user = username;
      }
    })
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getUsername(): string | null {
    return this.user;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.TOKEN_KEY) !== null;
  }
}

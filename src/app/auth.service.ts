import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_KEY = "auth_token";
  private readonly USERNAME_KEY = "username";
  private usernameSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public username$: Observable<string | null> = this.usernameSubject.asObservable();
  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    const result = this.http.post('https://fakestoreapi.com/auth/login', {username, password});
    result.subscribe(data => {
      if(data){
        localStorage.setItem(this.TOKEN_KEY, JSON.stringify(data));
        localStorage.setItem(this.USERNAME_KEY, JSON.stringify(username));
        this.usernameSubject.next(username);
      }
    })
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USERNAME_KEY);
    this.usernameSubject.next(null);
  }

  getUsername(): string | null {
    return localStorage.getItem(this.USERNAME_KEY);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.TOKEN_KEY) !== null;
  }

  getUsernameObservable(): Observable<string | null> {
    return this.usernameSubject.asObservable();
  }
}

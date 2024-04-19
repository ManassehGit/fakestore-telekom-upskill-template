import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router ) {}

  onSubmit(){
    if(this.authService.isAuthenticated()){
      alert("Already logged in");
      this.router.navigate(['/product-list']);
    }else{
      this.authService.login(this.username, this.password)
      if(this.authService.isAuthenticated()){
        this.username = "";
        this.password = "";
        alert("Login successful")
        this.router.navigate(['/product-list']);
      }else{
        this.username = "";
        this.password = "";
        alert("Login failed")
      }
    }
    
  }
}

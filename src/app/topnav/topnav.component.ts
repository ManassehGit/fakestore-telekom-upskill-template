import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {
  username!: string | null;
  isLoggedIn!: boolean;
  constructor(private authService: AuthService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLoggedIn = this.authService.isAuthenticated();
    let user = this.authService.getUsername();
    if (user) {
      const result = JSON.parse(user);
      this.username = result[0].toUpperCase() + result.slice(1);
    }
    this.authService.getUsernameObservable().subscribe(username => {
      if(username){
        const result = JSON.parse(username);
        this.username = result[0].toUpperCase() + result.slice(1);
      }
    });
  } 

  logout(): void {
      this.authService.logout();
      alert("You're logged out");
  }

}

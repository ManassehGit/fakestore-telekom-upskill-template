import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {
  username!: string | null;
  constructor(private authService: AuthService){
    this.username = this.authService.getUsername();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.username = this.authService.getUsername();
  } 

}

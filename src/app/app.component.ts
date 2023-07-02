import { AuthService } from './auth/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showLoad:boolean = false;
  constructor(private LoginServiceService: AuthService){
    this.LoginServiceService.isLoading$.subscribe(showLoading=> {
      this.showLoad = showLoading;
    })
  }

  title = 'bohemianMoon';
}

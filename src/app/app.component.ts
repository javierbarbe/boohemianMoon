import { LoginServiceService } from './shared/services/login-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showLoad:boolean = false;
  constructor(private LoginServiceService: LoginServiceService){
    this.LoginServiceService.isLoading$.subscribe(showLoading=> {
      this.showLoad = showLoading;
    })
  }

  title = 'bohemianMoon';
}

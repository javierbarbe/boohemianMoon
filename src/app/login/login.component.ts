import { Component } from '@angular/core';
import { LoginServiceService } from '../shared/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private loginService:LoginServiceService){}
  showLoading(){
    this.loginService.callhttp().subscribe(res=> {
      console.log("respuesta de suscripcion",res)
    });
  }

}

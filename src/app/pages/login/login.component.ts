import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private loginService:AuthService){}
  showLoading(){
    this.loginService.callhttp().subscribe(res=> {
      console.log("respuesta de suscripcion",res)
    });
  }

}

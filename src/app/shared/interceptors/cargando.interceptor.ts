import { AuthService } from '../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { mergeMap, delay, takeUntil, finalize  } from 'rxjs/operators'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CargandoInterceptor implements HttpInterceptor {

  constructor(private loginService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    console.log("interceptando")
    this.loginService.showLoading();
    return next.handle(request).pipe(
      delay(5000),
      finalize(() => {
        console.log("finalizando interceptación")
        this.loginService.hideLoading()})
    );;
  }
}

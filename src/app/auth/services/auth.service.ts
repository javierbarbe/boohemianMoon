import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, catchError, debounceTime, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoading:boolean = false;
  isLoading$:ReplaySubject<boolean> = new ReplaySubject();

  constructor(private httpService:HttpClient) { }

  callhttp(){
    return this.httpService.get("http://localhost:4242/prueba")
        .pipe(
          debounceTime(44000),
          catchError(err=> {
            console.log("error:",err)
            // return err;
            return of(null);
          })
        )

  }

  showLoading(){
    this._isLoading = true;
    this.isLoading$.next(this._isLoading);
  }

  hideLoading(){
    this._isLoading = false;
    this.isLoading$.next(this._isLoading);
  }

  login(email:string, pass:string):Observable<User| boolean>{
    if(email.includes("javi") && pass.includes("123")){
      return of( {nombreUsuario:'Javi', email, id:'sdadasdasdas12.srr134rf.Ssadsd' })
    }
    else return of(false);
  }



}

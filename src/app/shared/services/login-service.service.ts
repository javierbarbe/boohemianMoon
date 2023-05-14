import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, catchError, debounceTime, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

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



}
